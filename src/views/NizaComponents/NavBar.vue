<template>
<div class="nav-container">
    <div> <img src="big3dlogo.png"/> </div>
    <div> Home</div>
    <div> Story+</div>
    <div> Samples+</div>
    <div> Gallery</div>
    <div> Pricing</div>
    <div> Printing</div>
    <div> Purchase</div>
    <div class="bg-yellow"> Login</div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped >
.nav-container {
    @apply flex justify-evenly;
}

div:nth-child(n) {
    @apply p-6 w-full h-full;
}
</style>