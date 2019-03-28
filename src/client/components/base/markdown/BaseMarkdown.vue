<template>
    <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'

var renderer = new marked.Renderer()

renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
  var flag = '#'.repeat(level)
  return `
              <h${level}>
                ${text}
                <a id="${escapedText}" class="anchor" href="#${escapedText}">
                  <span class="header-link">` + flag + `</span>
                </a>
              </h${level}>`
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  headerIds: true,
  heading: true,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

export default {
  name: 'b-markdown',
  computed: {
    compiledMarkdown () {
      return marked(this.text, {
        sanitize: true
      })
    }
  },
  props: ['text']
}
</script>
