<template>
    <div>
        <MainHero />
        <Chart />
    </div>
</template>
<script>
//import Header from "./Header.vue";
import Chart from "./Chart.vue";
import MainHero from "./MainHero.vue";

export default {
    lang: 'fr',
    components: {
    MainHero,
    Chart
},
    name: 'Home',
}
</script>