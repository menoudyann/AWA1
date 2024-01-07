<template>
    <div class="container">
        <MainHero />
        <MarketingSection />
        <Chart2 />
    </div>
</template>
<script>
import MainHero from "./Mainhero.vue";
import MarketingSection from "./MarketingSection.vue";
import Chart2 from './Chart2.vue'

export default {
    lang: 'fr',
    components: {
    MainHero,
    MarketingSection,
    Chart2
    
},
    name: 'Home',
}
</script>
