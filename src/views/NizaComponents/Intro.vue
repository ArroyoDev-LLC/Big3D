<template>
<div class ="flex justify-evenly">
    <div class="intro-left-container" > 
        <text class ="font-bold text-2xl">think</text>
        <text class ="font-bold text-2xl">print</text>
        <text class ="font-bold text-2xl">build</text>
        <div>
            <text class="intro-header text-6xl">BIG</text> 
            
        </div>

        <text>Upload a low poly 3D model and generate a life size BIG 3D puzzle</text>
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