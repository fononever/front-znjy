import { checkPhone } from '_UTILS_'
import { userSer } from '_SERVICE_'
export default {
  data() {
    return {
      isRegister: false,
      isPhoneRight: false,
      findForm: {
        mobile: '',
        code: '',
        password: '',
        checkpassword: '',
      },
      findRules: {
        mobile: [{ required: true, validator: checkPhone() }],
        code: [{ required: true, message: '请输入短信验证码' }],
        password: [{ required: true, message: '请输入密码' }],
        checkpassword: [{ required: true, validator: this.checkpasswordAgain }],
      },
    }
  },

  methods: {
    // 重复密码验证
    checkpasswordAgain(rule, value, callback) {
      if (!this.findForm.checkpassword) {
        callback(new Error('请再次输入密码'))
      } else if (this.findForm.password !== this.findForm.checkpassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    // 校验手机号是否注册
    checkRegisterMobile() {
      userSer
        .checkRegisterMobile({
          mobile: this.findForm.mobile,
        })
        .then(res => {
          if (res && res.code === 0) {
            this.isRegister = res.data ? true : false // eslint-disable-line
          }
        })
    },
  },
  watch: {
    'findForm.mobile'() {
      this.$refs.findForm.validateField('mobile', valid => {
        if (!valid) {
          this.isPhoneRight = true
          this.checkRegisterMobile()
        } else {
          this.isPhoneRight = false
        }
      })
    },
  },
}
