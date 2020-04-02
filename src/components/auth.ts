const USER_STOREKEY = '@GLOBAL_UserToken'

const getUser = () => {
  let object = {
    username: '',
    password: '',
    loggedin: false,
  }
  let data: Array<any> = []
  const value = localStorage.getItem(USER_STOREKEY)
  if (value) {
    return JSON.parse(value)
  }
  return object
}

const setUser = async (user: any) => {
  localStorage.setItem(USER_STOREKEY, JSON.stringify(user))
}

const removeUser = async (any: any) => {
  localStorage.removeItem(USER_STOREKEY)
}

export { getUser, setUser, removeUser }

/**
 * for testing, refer to
 * https://github.com/react-native-community/async-storage/blob/LEGACY/docs/Jest-integration.md
 */
