<template>
    <div>
        <MainHero title="Hello" description="descr" buttonLabel="clickme"></MainHero>
    </div>
</template>
<script>
//import Header from "./Header.vue";
import MainHero from "./MainHero.vue";

export default {
    lang: 'fr',
    components: {
        MainHero,
    },
    name: 'Home',
}
</script>