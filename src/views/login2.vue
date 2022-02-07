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
import { Button, Form, Input } from 'ant-design-vue'
import useLoginRepositories from '../composables/useLoginRepositories'
export default {
  components: {
    Button,
    Form,
    FormItem: Form.Item,
    Input
  },
  setup (props) {
    return {
      ...useLoginRepositories()
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
