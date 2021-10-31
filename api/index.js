function loadAbis() {
  const locales = require.context('./abis/', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const obj = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      obj[locale] = locales(key)
      obj[locale].name = locale
    }
  })
  // console.log(obj)
  return obj
}

function loadApis() {
  const locales = require.context('./modules/', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const obj = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      obj[locale] = locales(key)
    }
  })
  // console.log(obj)
  return obj
}

const abis = loadAbis();
const apis = loadApis();
const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true
  Object.defineProperties(Vue.prototype, {
    // 注意，此处挂载在 Vue 原型的 $api 对象上
    $abi: {
      get() {
        return abis
      }
    },
    $api: {
      get() {
        return apis
      }
    }
  })
}
export default install
