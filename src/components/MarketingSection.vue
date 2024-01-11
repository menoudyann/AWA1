<template>
    <section class="bg-white dark:bg-gray-900" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }"
        :delay="250">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div>
                <img id="imgParachute" class="w-full drop-shadow-xl rounded-lg hover:scale-105 scale-95 duration-200"
                    src="/parachute.jpg" alt="parachute in horizon" />
            </div>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                   Tout le monde aime se rappeler des bons souvenirs, pas vous ?.
                </h2>
                <p class="mb-6 text-justify font-light text-gray-500 md:text-lg dark:text-gray-400">
                    Cytroneta vous fera ressentir un goût culinaire du passé ! Cette boisson pétillante et rafraîchissante, dotée d'une étiquette et d'un bouchon rétro cultissimes, est la meilleure combinaison de goûts intemporels et du climat unique des vacances insouciantes. Prenez une gorgée et partez pour un voyage sentimental.
                </p>
                <a href="/contact"
                    class="inline-flex items-center text-white bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Prendre contact
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" v-motion :initial="{ opacity: 0, x: 100 }" :visible="{ opacity: 1, x: 0 }"
        :delay="250">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                   Stimule le corps et l'esprit.
                </h2>
                <p class="mb-6 text-justify font-light text-gray-500 md:text-lg dark:text-gray-400">
                    Cytroneta est une boisson énergisante qui vous donne un coup de fouet et vous aide à rester concentré. Elle est idéale pour les personnes qui ont besoin d'un regain d'énergie pour faire face à une journée bien remplie.
                </p>
                <a href="/contact"
                    class="inline-flex items-center text-white  bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Prendre contact
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div>
                <img id="imgSkateboard" class="w-full drop-shadow-xl rounded-lg hover:scale-105 scale-95 duration-200"
                    src="/skateboard.jpg" alt="dashboard image" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "MarketingSection",
};
</script>
