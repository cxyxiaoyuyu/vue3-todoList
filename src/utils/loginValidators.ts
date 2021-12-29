import { ref } from "vue";

interface User {
  username: String,
  password: String
}
export const loginUser = ref<User>({
  username: "admin",
  password: "123456",
});

export const rules = ref({
  username: [
    {
      message: "username could not be empty...",
      trigger: "blur",
      required: true,
    },
  ],
  password: [
    {
      required: true,
      message: "password could not be empty..",
      trigger: "blur",
    },
    {
      min: 6,
      max: 10,
      message: "password's length has to be 6 to 10 characters...",
      trigger: "blur",
    },
  ],
});
