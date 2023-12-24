<template>
  <section class="bg-white dark:bg-gray-900" v-motion-slide-right>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About us</h2>

    </div>
  </section>
</template>
<script>
import Header from "./Header.vue";

export default {
  lang: 'fr',
  components: {
    Header
  },
  name: 'Home',
}
</script>
