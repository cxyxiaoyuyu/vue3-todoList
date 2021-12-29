<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister()"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref ,getCurrentInstance} from "vue";
import { registerUser, registerRules } from "@/utils/registerValidators";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const registerForm = ref(null) 
    // @ts-ignore
    const { appContext:{config: {globalProperties: {$http}}},ctx } = getCurrentInstance()

    console.log(getCurrentInstance(),'getCurrentInstance')
    const router = useRouter()

    const handleRegister = () => {
      // @ts-ignore
      registerForm.value.validate((valid: boolean) => {
        if (valid) {
          $http.post("/api/v1/auth/register",registerUser)
          .then((res:any)=>{
            console.log(res)
            ctx.$message({
              message: '注册成功',
              type: 'success' 
            })  
            router.push('/')
          })

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { registerForm,registerUser,registerRules,handleRegister };
  },
};
</script>
<style scoped>
</style>
