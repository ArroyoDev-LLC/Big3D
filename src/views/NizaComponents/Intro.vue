<template>
<div class ="flex justify-evenly">
    <div class="intro-left-container" > 
        <Text class ="font-bold">Think</Text>
        <div>
            <Text class="intro-header">BIG</Text> 
            
        </div>

        <Text>Upload a low poly 3D model and generate a life size BIG 3D puzzle</Text>
         </div>
    <div> <img src="https://picsum.photos/600/600"/> </div>
 
</div>
</template>

<script lang=ts>
export default {
  name: "Intro"
}
</script>

<style scoped lang="postcss">

.intro-header {
    @apply font-black text-4xl text-gold;
}
.intro-left-container {
    @apply flex flex-col text-left justify-center;
}

</style>