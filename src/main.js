import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EasyUpload from '/packages/index'
const demoImage = 'https://tva1.sinaimg.cn/large/e6c9d24egy1h05tx44992j20rs0rst90.jpg'
Vue.use(ElementUI, { size: 'small' }).use(EasyUpload, {
  drag: true,
  theme: '#010B12',
  action: '/api/blade-resource/oss/endpoint/put-file',
  headers: {
    'Blade-Auth':
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJzdXBwbGllcl9mbGFnIjoiMCIsInVzZXJfbmFtZSI6ImFkbWluIiwicmVhbF9uYW1lIjoi566h55CG5ZGYIiwiYXZhdGFyIjoiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0JpYXpmYW54bWFtTlJveHhWeGthLnBuZyIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwicG9zdF9pZCI6IjExMjM1OTg4MTc3Mzg2NzUyMDEiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwic2NvcGUiOlsiYWxsIl0sIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsIm9hdXRoX2lkIjoiIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIifSwiZXhwIjoxNjQ3MzQzODYxLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImp0aSI6Ijc0MDY2Y2VlLTcxMDItNDcxYi05MGQ2LWY4NDJlODNiNmVjZCIsImFjY291bnQiOiJhZG1pbiJ9._dSZVyjrzFX2kXpNF1ZbTZYtJkwCGJ3yIrR0p9ktKSw',
    Authorization: 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
  }
})
Vue.config.productionTip = false

new Vue({
  data: () => ({
    files: [{ name: 'food.jpeg', url: demoImage }]
  }),
  render(h) {
    return h('easy-upload', {
      props: {
        viewWithCount: true,
        size: 1,
        fileList: this.files
      },
      on: {
        'update:files': files => (this.files = files)
      }
    })
  }
}).$mount('#app')
