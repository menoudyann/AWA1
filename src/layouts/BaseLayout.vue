<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow bg-yellow-50" >
            <RouterView />
        </main>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    components: {
        Header,
    },
}
</script>