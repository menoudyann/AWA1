<template>
    <div class="overflow-clip">
        <MainHero />
        <MarketingSection />
        <Chart />
    </div>
</template>
<script>
import MainHero from "./Mainhero.vue";
import MarketingSection from "./MarketingSection.vue";
import Chart from './Chart.vue'

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
