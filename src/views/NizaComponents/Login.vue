<template>
<div>
    <div class="text-3xl font-bold">
        Login

        <Button @click="forgotPassword" label="Password"/>
    </div>

    <div>
        <InputText type="text" v-model="username" />
        <InputText type="text" v-model="password" />
    </div>
</div>
</template>

<script lang=ts>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import {defineComponent, ref} from "vue";


export default defineComponent({
  name: "Login",
  components:{InputText, Button},
  setup() {
     const username = ref("")
     const password = ref("")
     const forgotPassword = () => {
         console.log(password.value)
     }
      return {
          username, 
          password,
          forgotPassword
        }
  }
});

</script>

<style scoped lang="postcss">

</style>