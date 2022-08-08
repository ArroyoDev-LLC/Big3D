<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="h-24 w-full mt-6 bg-black text-white flex items-center justify-center"
  >
    &copy; {{ year }} Big3d. All Rights Reserved.
  </footer>
</template>
