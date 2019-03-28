<template>
    <div>
      <embed :src="src"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/" :width="width"/>
    </div>
</template>

<script>
export default {
  props: ['src', 'width'],
  data () {
    return {

    }
  }
}
</script>
