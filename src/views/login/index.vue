<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo.jpg" alt />
      <el-form ref="form" :model="form" :rules='loginRules' status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" placeholder="验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value='true'>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表单 -->
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    // 自定义校验规则
    var checkPhone = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }

    return {
      form: {
        mobile: '13911111111',
        code: '246810'
      },
      // 校验规则
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 校验成功进行登录（发请求）
          // console.log('ok')
          // console.log(this.form)

          // 以下代码可能出现异常（报错）  使用try{ 可能报错代码 }catch(e){ 处理错误 }

          try {
            const { data: { data } } = await this.$http.post('authorizations', this.form)
            local.setUser(data)
            this.$router.push('/')
          } catch {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/2020-6-3 (2).jpg") no-repeat center/cover;
  position: absolute;
  left: 0;
  top: 0;

  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
