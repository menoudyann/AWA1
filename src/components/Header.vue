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
  background-color: #f9f9f9;
  padding: 10px;
  z-index: 1000;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
}

.sticky-header .logo {
  height: 50px; 
  margin-right: 20px; 
}

.sticky-header nav a {
  color: #000000;
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

