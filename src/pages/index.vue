<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Samples from '@/views/old/Samples.vue'
import Intro from '@/views/old/Intro.vue'
import NavBar from '@/views/old/NavBar.vue'
import Story from '@/views/old/Story.vue'
import Gallery from '@/views/Gallery.vue'
import Pyramid from '@/views/old/Pyramid.vue'

export default defineComponent({
  name: 'OldHome',
  components: {
    NavBar,
    Intro,
    Story,
    Samples,
    Gallery,
    Pyramid,
    InputText,
    Toast
  },
  setup() {
    const toast = useToast()

    const showSuccess = () => {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Logged In',
        life: 3000
      })
    }
    const showError = () => {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error Logging In Username Or Password May Be Incorrect',
        life: 3000
      })
    }
    const loginToSite = () => {
      // success or error state on actual login through database
      showSuccess()
      // if successful login then disable the login promptp
      userLoggedIn.value = !userLoggedIn.value
      showError()
      console.log(userLoginInfo.value)
      console.log('logged in')
    }

    const userLoggedIn = ref(false)
    const loginClickedSate = ref(false)
    const userLoginInfo = ref({
      username: '',
      password: ''
    })
    const goToSection = (section: string) => {
      console.log(section)
      const sectionId = document.getElementById(section)
      if (sectionId) {
        sectionId.scrollIntoView()
      }
    }
    const jumpToWizard = () => {
      const wizardId = document.getElementById('generator-wizard')
      if (wizardId) wizardId.scrollIntoView()
    }
    return {
      showSuccess,
      loginToSite,
      userLoggedIn,
      loginClickedSate,
      userLoginInfo,
      goToSection,
      jumpToWizard
    }
  }
})
</script>

<template>
  <div class="relative">
    <div class="sticky top-0 bg-white z-50">
      <NavBar
        class="mb-1"
        :is-user-logged-in="userLoggedIn"
        @tabClick="goToSection"
        @login="() => (loginClickedSate = !loginClickedSate)"
      />
    </div>
    <Toast />
    <Intro id="home" class="mb-5 -mt-1" />
    <Story id="story" />
    <Samples id="pricing" />
    <!--    <Printing id="printing" /> -->
    <LoginModal
      v-if="!userLoggedIn"
      v-show="loginClickedSate"
      @close="() => (loginClickedSate = !loginClickedSate)"
    >
      <template #header>Login</template>
      <template #body>
        <div class="flex flex-col">
          <div class="w-full sm:my-3 text-left">
            <text>Username</text>
            <InputText
              v-model="userLoginInfo.username"
              class="w-full"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="w-full sm:my-3 text-left">
            <text>Password</text>
            <InputText
              v-model="userLoginInfo.password"
              class="w-full"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <Button
          class="shadow-md transform hover:scale-105 hover:shadow-lg transition transition-duration-500"
          style="
            background: black;
            color: white;
            padding: 6px;
            margin-right: auto;
          "
          >Forgot Password
        </Button>
        <Button
          class="shadow-md bg-yellow hover:bg-gold transform hover:scale-105 hover:shadow-lg transition transition-duration-500"
          style="color: black; padding: 6px; font-weight: bold"
          @click="loginToSite"
          >Jump In
        </Button>
      </template>
    </LoginModal>
    <Gallery id="gallery" />
    <div id="samples" class="h-180 flex items-center">
      <Pyramid />
    </div>
    <div id="generator-wizard">
      <ModelGeneratorWizard />
    </div>
    <Login />
    <Footer />
  </div>
</template>
