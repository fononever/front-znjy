let timer = null
export default {
  data() {
    return {
      second: 60,
      sendStatus: false,
      sendCodeText: '发送验证码',
      isPhoneRight: false,
    }
  },
  methods: {
    // 倒计时
    countDown() {
      this.second = 59
      this.sendStatus = true
      timer && clearInterval(timer)
      this.sendCodeText = `验证码已发送(${this.second}s)`
      timer = setInterval(() => {
        this.second = this.second - 1
        this.sendCodeText = `验证码已发送(${this.second}s)`
        if (this.second <= 0) {
          timer && clearInterval(timer)
          this.sendStatus = false
          this.sendCodeText = '重新发送'
        }
      }, 1000)
    },
  },
}
