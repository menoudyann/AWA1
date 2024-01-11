<template>
  <section class="bg-white dark:bg-gray-900" v-motion-slide-right>
    <div class="relative w-full h-screen">
      <div class="w-full h-full bg-[url('./cytroneta.jpg')] bg-no-repeat bg-top bg-cover">
        <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-md backdrop-brightness-75">
          <h3 class="text-2xl text-primary-400 drop-shadow-lg">CYTRONETA</h3>
          <h1 class="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">
            Bienvenue chez
            <span class="text-yellow-300">LY ENERGY</span>
          </h1>
          <p class="mt-5 text-white text-lg font-light drop-shadow-lg text-justify lg:px-20 px-10">
            Chez LY Energy, nous sommes passionnés par l'énergie, l'innovation
            et le potentiel humain. Fondée en novembre 2023 par deux étudiants
            visionnaires, notre entreprise est le fruit d'une ambition commune :
            créer une boisson énergisante exceptionnelle qui transcende les
            limites de l'ordinaire.
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="flex flex-col space-y-20 mt-10 mb-10">
    <div class="container mx-auto flex flex-row items-center space-x-60 -skew-x-6"
    v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visibleOnce="{ opacity: 1, x: 0 }"
      :delay="250"
    >
      <h2 class="text-5xl text-justify text-gray-900 dark:text-white hover:scale-125 duration-200">
        <span class="text-yellow-300">Notre</span> Mission
      </h2>
      <p class="text-justify text-lg font-light text-gray-500 dark:text-gray-400">
        Notre mission est simple mais puissante : booster vos journées. Nous
        croyons en la force du potentiel humain et en la capacité de chacun à
        atteindre des sommets. Avec notre boisson énergisante révolutionnaire,
        Cytroneta, nous visons à fournir à nos consommateurs le carburant
        nécessaire pour exceller dans tous les aspects de leur vie.
      </p>
    </div>

    <div class="container mx-auto flex flex-row-reverse items-center space-x-reverse space-x-60 skew-x-6"
    v-motion
      :initial="{ opacity: 0, x: 100 }"
      :visibleOnce="{ opacity: 1, x: 0 }"
      :delay="250"
    >
      <h2 class="text-5xl text-justify text-gray-900 dark:text-white hover:scale-125 duration-200">
        <span class="text-yellow-300">Notre</span> Vision
      </h2>
      <p class="text-justify text-lg font-light text-gray-500 dark:text-gray-400">
        Notre vision est de devenir la marque de boisson énergisante la plus
        appréciée au monde. Nous voulons que Cytroneta soit synonyme de
        performance, de passion et de plaisir. Nous voulons que notre boisson
        énergisante soit la première chose à laquelle les gens pensent
        lorsqu'ils ont besoin d'un coup de fouet.
      </p>
    </div>

    <div class="container mx-auto flex flex-row items-center space-x-60 -skew-x-6"
    v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visibleOnce="{ opacity: 1, x: 0 }"
      :delay="250"
    >
      <h2 class="text-5xl text-gray-900 dark:text-white hover:scale-125 duration-200">
        <span class="text-primary-400">Cytroneta</span><br>La puissance de l'énergie naturelle
      </h2>
      <p class="text-justify text-lg font-light text-gray-500 dark:text-gray-400">
        Au cœur de notre entreprise se trouve Cytroneta, notre boisson
        énergisante emblématique. Créée avec soin et attention, Cytroneta tire
        sa puissance de sources naturelles et d'une formule exclusive qui offre
        un regain d'énergie sans compromis sur la qualité.
      </p>
    </div>

    <div class="container mx-auto flex flex-row-reverse items-center space-x-reverse space-x-60 skew-x-6"
    v-motion
      :initial="{ opacity: 0, x: 100 }"
      :visibleOnce="{ opacity: 1, x: 0 }"
      :delay="250"
      >
      <h2 class="text-5xl text-left text-gray-900 dark:text-white hover:scale-125 duration-200">
        <span class="text-yellow-300">Engagés</span> envers l'excellence
      </h2>
      <p class="text-justify text-lg font-light text-gray-500 dark:text-gray-400">
        Chez LY Energy, l'excellence est notre norme. De la sélection
        méticuleuse des ingrédients à la conception de l'emballage, nous nous
        engageons à fournir à nos consommateurs une expérience énergisante
        inégalée.
      </p>
    </div>

    <div class="container mx-auto flex flex-row items-center space-x-60 -skew-x-6"
    v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visibleOnce="{ opacity: 1, x: 0 }"
      :delay="250"
      >
      <h2 class="text-5xl text-justify text-gray-900 dark:text-white hover:scale-125 duration-200">
        <span class="text-yellow-300">Rejoignez</span> notre communauté dynamique
      </h2>
      <p class="text-justify text-lg font-light text-gray-500 dark:text-gray-400">
        Nous invitons les esprits audacieux et les chercheurs d'énergie à se
        joindre à notre communauté dynamique. Ensemble, nous aspirons à créer
        une culture où l'énergie et l'innovation fusionnent pour propulser
        chacun vers de nouveaux sommets. Explorez notre site pour en savoir plus
        sur LY Energy, Cytroneta et notre engagement envers une énergie
        exceptionnelle. Rejoignez-nous dans cette aventure et découvrez comment
        LY Energy peut stimuler votre potentiel.

        <br /><br /><span class="italic">L'énergie commence ici, chez LY Energy.</span>
      </p>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";

export default {
  lang: "fr",
  components: {
    Header,
  },
  name: "Home",
};
</script>
