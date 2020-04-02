import { getUser, removeUser, setUser } from './auth'
import { Route, Redirect } from 'react-router-dom'
import { message } from 'antd'

export const handleClick = (key: any, state: any, setState: any) => {
  const path = () => {
    switch (key) {
      case 'dashboard':
        return '/DashBoard'

      case 'order':
        return '/Orders'

      case 'supplier':
        return '/Suppliers'

      default:
        break
    }
  }
  setState({
    ...state,
    currentKey: key,
    path: path(),
  })
}

export const login = async (userinfo: any, setQuery: any, rootStore: any) => {
  setQuery(rootStore.requestLogin(convertToBase64(userinfo)))
}

export const updateStatus = (
  scheduleline: any,
  rootStore: any,
  setQuery: any,
) => {
  setQuery(rootStore.updateStatus(scheduleline))
}

export const showContent = (
  key: any,
  DBcontent: any,
  POcontent: any,
  SUPcontent: any,
) => {
  switch (key) {
    case 'dashboard':
      return DBcontent

    case 'order':
      return POcontent

    case 'supplier':
      return SUPcontent

    default:
      break
  }
}

export const convertToBase64 = (credential: any) => {
  const { username, password } = credential
  return {
    username: new Buffer(username).toString('base64'),
    password: new Buffer(password).toString('base64'),
  }
}

export const sorts = [
  {
    value: 'date',
    desc: 'Date',
  },
  {
    value: 'supp',
    desc: 'Supplier',
  },
  {
    value: 'status',
    desc: 'Status',
  },
]

export const sort = [
  {
    value: 'name',
    desc: 'Name',
  },

  {
    value: 'status',
    desc: 'Status',
  },
]

export const SearchFilterSupplier = (
  text: any,
  source: any,
  setState: any,
  state: any,
) => {
  const newData = source.filter((x: any) => {
    const itemData = x.supplier.supplierName
      ? x.supplier.supplierName.toUpperCase()
      : ''.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  })

  setState(() => ({
    ...state,
    datasource: newData,
    search: text,
  }))
}

export const SearchFilterOrder = (
  text: any,
  source: any,
  setState: any,
  state: any,
) => {
  const newData = source.filter((x: any) => {
    const itemData = x.purchaseOrderNo
      ? x.purchaseOrderNo.toUpperCase()
      : ''.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  })

  setState(() => ({
    ...state,
    datasource: newData,
    search: text,
  }))
}

export const Auth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    Auth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb: any) {
    Auth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

export const onSubmit = (
  setQuery: any,
  rootStore: any,
  userinfo: { username: string; password: string },
  error?: any,
  data?: any,
) => {
  // console.log(userinfo, 'ANOTO')
  // const value = getUser()
  // const { username } = value
  // if (userinfo.username == '') {
  //   if (username == 'logout') {
  //     removeUser()
  //     let object = {
  //       username: '',
  //       password: '',
  //       loggedin: false,
  //     }
  //     setUser(object)
  //   }
  // }
  // // setQuery(rootStore.requestPurchaseOrders())
  login(userinfo, setQuery, rootStore)
}
