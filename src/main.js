import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import EasyUpload from '/packages/index'

Vue.use(ElementUi, { size: 'small' }).use(EasyUpload, {
  drag: true,
  theme: '#010B12',
  action: '/api/blade-resource/oss/endpoint/put-file-attach-by-name',
  generateUuid: () => `${+new Date()}`,
  headers: {
    'Blade-Auth':
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJzdXBwbGllcl9mbGFnIjoiMCIsInVzZXJfbmFtZSI6ImFkbWluIiwicmVhbF9uYW1lIjoi566h55CG5ZGYIiwiYXZhdGFyIjoiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZyIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwicG9zdF9pZCI6IjExMjM1OTg4MTc3Mzg2NzUyMDEiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwic2NvcGUiOlsiYWxsIl0sIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsIm9hdXRoX2lkIjoiIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIifSwiZXhwIjoxNjQ3NTA2MTY4LCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImp0aSI6ImZkNmQ3NDUzLWY0NDAtNDhhZi04NjY1LTYwY2I2YWMxYWYxZCIsImFjY291bnQiOiJhZG1pbiJ9.Oas1yOUZ21_LiJQPQIZJHcOWBCxRcHhQW6FBYzy7FaI',
    Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
  }
})
Vue.config.productionTip = false

new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')
