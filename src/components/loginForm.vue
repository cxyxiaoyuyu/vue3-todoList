<template>
  <el-form
    ref="loginForm"
    label-width="120px"
    :model="loginUser"
    :rules="rules"
    class="loginForm sign-in-form"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginUser.username" placeholder="Enter Username..."></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="loginUser.password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="handleLogin" type="primary" class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import {ref,getCurrentInstance} from 'vue'
import { loginUser, rules } from "@/utils/loginValidators";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const loginForm = ref(null);
    const router = useRouter()

    // @ts-ignore
    const { appContext:{config: {globalProperties: {$http}}},ctx } = getCurrentInstance()
    // 触发登录方法
    const handleLogin = () => {
      $http.post('/api/login',loginUser.value)
      .then((res:any) => {
        console.log(res) 
        // 存储token
        localStorage.setItem('token',res.data.token)
        router.push('./')
      })

      // @ts-ignore
      loginForm.value.validate((valid: boolean) => {
        if (valid) {

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return { loginUser, rules, handleLogin, loginForm };
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
