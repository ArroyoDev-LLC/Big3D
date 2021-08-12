<template>
  <div class="modal__backdrop">
    <div class="modal">
      <header class="modal__header">
        <slot name="header"> This is the default title!</slot>
        <i class="pi pi-times p-3 cursor-pointer" @click="close" />
      </header>

      <section class="modal__body">
        <slot name="body"> I'm the default body!</slot>
      </section>
      <footer class="modal__footer">
        <slot name="footer">
          <div class="mx-2">
            <Button label="Cancel" @click="close" outline />
          </div>
          <div class="mx-2">
            <Button label="Save" />
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal",
  setup(props, { emit }) {
    const close = () => emit("close");
    return {
      close,
    };
  },
});
</script>

<style>
.modal {
  @apply flex flex-col rounded-md bg-white w-11/12 sm:w-2/3 md:w-1/2 h-1/4;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow-x: auto;
}

.modal__backdrop {
  @apply flex justify-center items-center;
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal__header,
.modal__footer {
  @apply p-4 flex items-center;
}

.modal__header {
  @apply justify-between border-b border-black text-3xl font-black;
}

.modal__footer {
  @apply justify-center border-t border-black;
}

.modal__body {
  @apply p-4 flex-grow overflow-y-auto;
}
</style>
