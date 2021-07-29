<template>
  <div name="parent container">
    <div name="text-container-top" class="text-left">
      <text>PRICING</text>
      <hr />
      <text class="text-2xl text-left">What does it <span>cost?</span></text>
    </div>
    <!--    route container start-->
    <div name="routes-container " class="flex justify-evenly p-2 m-4">
      <!--      diy container start-->
      <div name="DIY" class="bg-big3dBlack p-4 text-left mr-4" style="width:45rem">
        <div name="top">
          <div class="flex justify-between">
            <text class="font-black text-white text-2xl">DIY route</text>
            <text class="text-white font-bold">$500.00-$1500.00</text>
          </div>

          <img src="Group 58.png" width="700" height="200" />
          <text class="font-bold text-white"
            >Choose this option if you have your own 3D printer and ready to
            print and build your own models by yourself.
          </text>
          <hr />

  <div class="flex justify-between"> 
  
  <text class="text-white">What's in plan?</text>

          <button @click="() => diy1text = !diy1text">
            +
            </button>
        
            </div>
          
                 <hr :class="diy1text ? 'dotted-hr' : '' " />

        </div>

        <div name="pricing details" class="flex flex-col text-left pb-20">
          <div>
         
          </div>

          <ul v-if="diy1text" class="list-disc text-white pl-4">
            <li>¢50 per .STL joint generated</li>
          </ul>
        </div>
        <hr />
        <div name="included" class="flex flex-col text-left">
        
          <div class='flex justify-between'>  <text class="text-white">What's included?</text>
             <button @click="() => (diy2text = !diy2text)">
              +
            </button> </div>
                   <hr :class="diy2text ? 'dotted-hr' : '' " />

          <ul v-if="diy2text" class="list-disc text-white pl-4">
            <li class="">zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lenghts to cut</li>
            <li>simple instruction guide for assembly</li>
          </ul>
        </div>

        <div name="bottom">
          <div class="font-bold bg-yellow w-full p-2 text-center mt-4">
            GO BIG NOW
          </div>
        </div>
      </div>
      <!--diy container end-->
      <!--      build container start-->
      <div name="Build" class="bg-big3dBlack p-4 text-left">
        <div name="topB">
          <div class="flex justify-between">
            <text class="font-black text-white text-2xl">Finished frame route</text>
            <text class="text-white font-bold">$1000.00-$3000.00</text>
          </div>

          <img src="Group 59.png" width="700" height="200" />
          <text class="font-bold text-white">
            Choose this option if you want to receive a complete ready-to-assemble kit from us.
          </text>
          <hr />
          <div class="flex justify-between">
            <text class="text-white">What's in plan?</text>
                    <button @click="() => (build1text = !build1text)">
              +
            </button>
          </div>
          <hr :class="build1text ? 'dotted-hr' : '' " />
         
        </div>

        

        <div name="pricing details b" class="flex flex-col text-left pb-20">

      


                 

         
          <ul v-if="build1text" class="list-disc text-white pl-4">
            <li>¢50 per .STL joint generated</li>
             <li>¢20 to ¢70 per. ft of stick material</li>
            <li>$2.20 to $4.00 each joint</li>
            
          </ul>
        </div>
        <hr />
        <div name="includedb" class="flex flex-col text-left flex justify-between">
          <div class="flex justify-between">
          <text class="text-white">What's included?</text>
   <button @click="() => (build2text = !build2text)">
              +
            </button>
          </div>
          <hr :class="build2text ? 'dotted-hr' : '' " />
          <ul v-if="build2text" class="list-disc text-white pl-4">
            <li>full set of 3D puzzle pieces</li>
            <li>full set of pre-cut and labeled stick to join them together</li>
            <li>custom instruction sheet</li>
            <li>zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lengths to cut</li>
            <li>simple instruction guide for assembly</li>
            <li>shipping cost ofc;)</li>

          </ul>
        </div>

        <div name="bottomb">
          <div class="font-bold bg-yellow w-full p-2 text-center mt-4">
            GO BIG NOW
          </div>
        </div>
      </div>
      <!--      build container end-->
    </div>
  </div>
  <!--    routes container end-->
</template>

<script>

export default {
  name: "Samples",
  components: {},

  methods: {
  
  },

  data() {
    return {
      build1text: false,
      build2text: false,
      diy1text: false,
      diy2text: false,
    };
  },
};
</script>

<style scoped lang="postcss">
.dotted-hr {
  border-top: 2px dashed white;
  opacity: 0.2;
}


</style>
