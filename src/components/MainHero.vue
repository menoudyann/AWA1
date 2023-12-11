<template>
  <section class="bg-white dark:bg-gray-900">
    <div
        class=" px-4 mx-auto max-w-screen-xl text-center lg:px-12"
    >

      <ScrollyVideo src="../../../public/video.mp4" full=true debug=true class="banner-video" frameThreshold="0.01" />

      <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        La nouvelle boisson énergissante de Ste-Croix
      </h1>
      <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Retrouvez cette exclusivité à la cantine du CPNV
      </p>
      <div
          class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Voir la composition
          <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <svg
              class="w-6 h-5 mr-2 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 21"
          >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
            />
          </svg>
          Contactez-nous
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.vue';

export default {
  name: "MainHero",
  components: {
    ScrollyVideo
  }
};
</script>

<style>

.banner-video video{
  width: 100%;
  height: auto !important;
  object-fit: contain;
  position: sticky;
  transform: none !important;
  top: 0 !important;
  left: 0 !important;
}
</style>
