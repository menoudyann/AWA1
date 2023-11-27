<template>
  <header class="sticky-header">
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <nav>
      <a href="">Accueil</a>
      <a href="">À propos</a>
      <a href="">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #333;
  padding: 10px;
  z-index: 1000;
  display: flex; /* Utilisez flexbox pour aligner le logo et la navigation */
  align-items: center; /* Centre les éléments verticalement */
}

.sticky-header .logo {
  height: 50px; /* Ou la taille que vous souhaitez pour votre logo */
  margin-right: 20px; /* Espace entre le logo et la navigation */
}

.sticky-header nav a {
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 10px;
  display: inline-block;
}

.sticky-header nav a:hover {
  background-color: #555;
  border-radius: 4px;
}
</style>

