<template>
<div class ="flex justify-evenly">
    <div class="intro-left-container" > 
        <text class ="font-bold text-4xl text-big3dBlack">
            Stop wondering.
        </text>

        <text class ="font-bold text-4xl pb-2 text-big3dBlack">
            Think big
        </text>

        <text>
            Time for big toys! Generate full-size 3D model any form <br>
              you wantand get constructor model of your dreams
        </text>

        <div class="font-bold bg-yellow w-3/5 p-2 text-center mt-4">
            GO BIG NOW
        </div>

        
    </div>

    <div> 
        <img src="Frame 1.png"/> 
    </div>
 
</div>
</template>

<script lang=ts>
export default {
  name: "Intro"
}
</script>

<style scoped lang="postcss">

.intro-header {
    @apply font-black text-6xl text-yellow;
} 
.intro-left-container {
    @apply flex flex-col text-left justify-center;
}

</style>