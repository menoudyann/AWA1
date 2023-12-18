<template>
    <div>
        <MainHero />
        <MarketingSection />
        <Chart />
    </div>
</template>
<script>
import Chart from "./Chart.vue";
import MainHero from "./MainHero.vue";
import MarketingSection from "./MarketingSection.vue";

export default {
    lang: 'fr',
    components: {
    MainHero,
    MarketingSection,
    Chart
},
    name: 'Home',
}
</script>
