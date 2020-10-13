// 保存用户信息
const key = 'baibai'
const local = {
  // 保存
  setUser (user) {
    const jsonUser = JSON.stringify(user)
    window.sessionStorage.setItem(key, jsonUser)
  },
  // 查询
  getUser () {
    const jsonUser = window.sessionStorage.getItem(key)
    return JSON.parse(jsonUser)
  },

  // 删除
  delUser () {
    window.sessionStorage.removeItem(key)
  }
}

export default local
