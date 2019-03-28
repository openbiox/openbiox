import Mock from 'mockjs'
// import aboutusAPI from '@/mock/about'

// Mock.setup({
//   timeout: '350-600'
// })

// api
Mock.mock('/api/getpub', 'get', {
  'code': 0,
  'data': {
    'fullName': '@CNAME', // 随机生成中文人名
    'userId': 1000234234001,
    'username': 'zhangsan'
  },
  'msg': 'success'
}
)

export default Mock
