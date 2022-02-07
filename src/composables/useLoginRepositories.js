// 登录页组合式api
import { reactive, ref } from 'vue'
import { Message } from 'ant-design-vue'
import router from '../router'
export default function useUserRepositories () {
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
