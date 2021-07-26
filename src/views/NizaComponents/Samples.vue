<template>
<div name="parent container">
    <div name="text-container-top">
    <text>PRICING</text>
    <hr/>
    <text class="text-2xl text-left">What does it <span>cost?</span></text>

    </div>
  <div name="routes-container " class="flex justify-evenly p-2 m-4">  
      <div name="DIY" class="bg-black p-4 text-left"> 
          <div name="top" > 
              <div class="flex justify-between" >
                 <text class="font-black text-white text-2xl">DIY route</text>
              <text class="text-white font-bold">$500.00-$1500.00</text>
                  
                  </div>
             
              <img src="https://picsum.photos/1200/300" />
              <text class="font-bold text-white">Choose this option if you have your own 3D printer and ready to print and build your own models by yourself.</text>
<hr  />  

        <text class="text-white  pb-10">What is your plan?</text> <!--align not working-->
        
         </div>

     


    <div name="pricing details" class="flex flex-col text-left pb-20">
        <text class="text-white">Pricing Details </text>
            <ul class="list-disc text-white">
                <li>¢50 per .STL joint generated</li>
            
            </ul>
                


    </div>  
    <hr/>
    <div name="included" class="flex flex-col text-left"> 
        <text class="text-white pb-5">Whats included? </text>
        
        

        <ul class="list-disc text-white">
           
            <li class="">zip file of pre supported .stl files</li>
            <li>full cutsheet listing stick lenghts to cut</li>
            <li>simple instruction guide for assembly</li>
            
        </ul>

    </div>


         
         <div name="bottom">

        <div class="font-bold bg-yellow w-full p-2"> GO BIG NOW</div>

         </div>


         </div>

     <div name="Build"> 
          <div name="topb"> 

         </div>

        <div name="bottomb"> 



         </div>


         </div>




  </div>

 
</div>
</template>

<script lang=ts>
export default {
  name: "defaultname"
}
</script>

<style scoped lang="postcss">

</style>