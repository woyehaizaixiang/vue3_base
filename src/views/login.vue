<template>
  <div class="container">
    <div class="form">
      <Form
        ref="formRef"
        :model="loginForm"
        :rules="loginRules"
      >
        <FormItem
          label="账号"
          name="name"
        >
          <Input type="text" v-model:value="loginForm.name"></Input>
        </FormItem>
        <FormItem
          label="密码"
          name="password"
        >
          <Input type="password" v-model:value="loginForm.password"></Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            block
            size="large"
            :loading="loading"
            @click="handleLogin"
          >登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { Button, Form, Input, Message } from 'ant-design-vue'
import { reactive, ref } from 'vue'
import router from '../router'
export default {
  components: {
    Button,
    Form,
    FormItem: Form.Item,
    Input
  },
  setup (props) {
    // 登录表单数据
    const loginForm = reactive({
      name: '',
      password: ''
    })
    // 登录表单ref
    const formRef = ref(null)
    // 登录验证规则
    const loginRules = {
      name: [
        { required: true, message: '请输入账号' }
      ],
      password: [
        { required: true, message: '请输入密码' }
      ]
    }
    const loading = ref(false)
    // 点击登录
    function handleLogin () {
      formRef.value.validate().then(() => {
        // 验证通过
        loading.value = true
        setTimeout(() => {
          loading.value = false
          if (loginForm.name === 'admin' && loginForm.password === '123456') {
            router.push('/layout')
          } else {
            Message.error('账号或密码错误')
          }
        }, 1500)
      })
    }
    return {
      loginForm,
      formRef,
      handleLogin,
      loginRules,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  width: 500px;
  padding: 40px 20px 20px;
  box-sizing: border-box;
  background: #eee;
  border-radius: 6px;
}
</style>
