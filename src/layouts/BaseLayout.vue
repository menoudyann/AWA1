<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow bg-white" >
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        Footer
    },
}
</script>
