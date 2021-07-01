<template>
  <div style="">
    <div class="text-2xl">
      Our fans have shared some of their print adventures with us its AMAZING
      what they have come up with!
    </div>
    <div class="row">
      <div class="column">
        <img src="https://picsum.photos/200/165?grayscale" />
        <img src="https://picsum.photos/200/165?grayscale" />
      </div>
      <div class="column">
        <img src="https://picsum.photos/200/165?grayscale" />
        <img src="https://picsum.photos/200/165?grayscale" />
      </div>
      <div class="column">
        <img src="https://picsum.photos/200/165?grayscale" />
        <img src="https://picsum.photos/200/165?grayscale" />
      </div>
      <div class="column">
        <img src="https://picsum.photos/200/165?grayscale" />
        <div
          style="height: 49%"
          class="shadow-md bg-black flex flex-col mt-2 relative text-white"
        >
          <div
            class="absolute centered  divHighlight outline-white p-2 md:text-sm"
          >
            View More Projects +
          </div>
          <div
            class="
            md:text-sm

        md:mt-14
              absolute
              centered

              divHighlight
              outline-white
              p-2
            "
          >
            GO BIG NOW!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.divHighlight:hover {
  @apply bg-white;
  color: black;
}
</style>
