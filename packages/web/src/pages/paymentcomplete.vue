<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'PaymentComplete',
  components: { Spinner },
  setup() {
    const router = useRouter()
    setTimeout(() => {
      router.push('/')
    }, 3000)
    return {}
  }
})
</script>

<template>
  <div class="bg-gray h-screen">
    <div class="text-4xl">Your Purchase Was Successful</div>
    <div class="mb-5">Redirecting Back To Main Page</div>
    <div class="flex items-center justify-center">
      <Spinner class="w-60 h-60" />
    </div>
  </div>
</template>
