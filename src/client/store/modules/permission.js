const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  uuid: localStorage.getItem('uuid') ? localStorage.getItem('uuid') : '',
  userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : '',
  userGroup: localStorage.getItem('userGroup') ? localStorage.getItem('userGroup') : ''
}

const permission = {
  state: state,
  mutations: {
    changeLogin: (state, user) => {
      state.token = user.token
      state.uuid = user.uuid
      state.userId = user.userId
      localStorage.setItem('token', user.token)
      localStorage.setItem('uuid', user.uuid)
      localStorage.setItem('userId', user.userId)
    },
    changeUserGroup: (state, userGroup) => {
      state.userGroup = userGroup
      localStorage.setItem('userGroup', userGroup)
    }
  }
}

export default permission
