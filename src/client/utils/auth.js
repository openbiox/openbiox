export function logoutCleanLocalStoreage () {
  localStorage.removeItem('token')
  localStorage.removeItem('uuid')
  localStorage.removeItem('userId')
}
