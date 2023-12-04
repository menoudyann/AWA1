<template>
    <div>
        <h1>Contact</h1>

        <form>
            <div class="form-group">
                <label>Nom</label>
                <input type="text" name="lastname" class="form-input" required/>
            </div>

            <div class="form-group">
                <label>Prénom</label>
                <input type="text" name="firstname" class="form-input" required/>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="text" name="email" class="form-input" required/>
            </div>

            <div>
                <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
        </form>
    </div>
</template>
<script>
import Header from "./Header.vue";
export default {
    lang: 'fr',
    components: {
        Header
    },
    name: 'Home',
}
</script>
