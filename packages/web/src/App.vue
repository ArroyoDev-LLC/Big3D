<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Big3D',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#00aba9' : '#ffffff'))
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/big3dFavicon.svg' : '/big3dFavicon.svg'
      )
    }
  ]
})
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
html {
  @apply subpixel-antialiased;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  height: inherit;
}

#app {
  height: inherit;
}
</style>
