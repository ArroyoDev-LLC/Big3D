<script lang="ts">
export default {
  name: 'PrintSample'
}
</script>

<template>
  <div class="grid grid-cols-2 gap-x-4 m-20">
    <div class="">
      <p id="print" class="text-left pb-3">TRY BEFORE YOU BUY</p>
      <p class="font-bold text-big3dBlack text-5xl text-left pb-5">
        Sample Build
      </p>
      <p class="text-left">
        If you have your own 3D printer and want to print a few test
        <br />connectors first. Try out this Low Poly sample file. You will get
        5<br />
        .stl files to print in the material you like (we normally use PLA)
        <br />a cut sheet of sticks to connect them together. You can make
        <br />
        these sticks, buy them locally at a hobby shop or hardware store,
        <br />or online here or here: amazon.
      </p>
    </div>

    <div class="justify-items-center">
      <img src="pyramid.png" />
      <a
        href="https://app.zenhub.com/files/333636351/a756bcf2-d187-4a82-b62d-a760eab590d4/download"
        class="text-blue-600 text-2xl font-bold underline"
      >
        samplePyramid.zip</a
      >
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
