<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Samples from '@/components/Samples.vue'
import Intro from '@/views/Intro.vue'
import NavBar from '@/components/NavBar.vue'
import Story from '@/views/Story.vue'
import Gallery from '@/views/Gallery.vue'
import Pyramid from '@/views/Pyramid.vue'

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
    const tabClick = (section: string) => {
      emit('tabClick', section)
    }
    const menuItems = ref([
      {
        label: 'Home',
        command: () => {
          goToSection('home')
        }
      },
      {
        label: 'Story+',
        command: () => {
          goToSection('story')
        }
      },
      {
        label: 'Samples+',
        command: () => {
          goToSection('samples')
        }
      },
      {
        label: 'Gallery',
        command: () => {
          goToSection('gallery')
        }
      },
      {
        label: 'Pricing',
        command: () => {
          goToSection('pricing')
        }
      },
      {
        label: 'Purchase',
        command: () => {
          goToSection('generator-wizard')
        }
      },
      {
        label: 'Login',
        command: () => {
          loginClickedSate.value = !loginClickedSate.value
        }
      }
    ])
    return {
      showSuccess,
      loginToSite,
      userLoggedIn,
      loginClickedSate,
      userLoginInfo,
      goToSection,
      jumpToWizard,
      menuItems
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
        :nav-items="menuItems"
        @tabClick="goToSection"
        @login="() => (loginClickedSate = !loginClickedSate)"
      >
        <template #Login="{ item }">
          <div
            v-if="!isUserLoggedIn"
            :id="item.label"
            class="login-button py-3"
            @click="item.command"
          >
            {{ item.label }}
          </div>
          <div
            v-else
            class="rounded-xl shadow-lg flex justify-center items-center"
            style="border: 1px solid black; height: 5rem"
            @click="$router.push('account')"
          >
            Triston
          </div>
        </template>
      </NavBar>
    </div>
    <Toast />
    <Intro id="home" class="mb-5 -mt-1" />
    <Story id="story" />
    <Samples id="pricing" />
    <!--    <Printing id="printing" /> -->
    <LoginModal
      v-if="loginClickedSate"
      @close="() => (loginClickedSate = !loginClickedSate)"
    >
      <template #header>Login</template>
      <template #body>
        <div
          class="flex flex-col items-center h-full justify-center sm:text-2xl"
        >
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
    <Footer />
  </div>
</template>

<style scoped>
.login-button {
  @apply bg-yellow text-xl hover:bg-gold hover:scale-105 hover:shadow-lg transform-gpu transition duration-300 ease-in-out cursor-pointer;
}
</style>
