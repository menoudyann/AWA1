<style>
.router-link-active {
  font-weight: bold;
  color: rgb(251 191 36);
}
</style>

<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo
        alt="LY ENERGY Logo"
        image-url="./src/assets/logo.png"
        link="/"
      >
      </fwb-navbar-logo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <router-link to="/home" exact>Home</router-link>
        <router-link to="/aboutus" exact>About us</router-link>
        <router-link to="/contact" exact>Contact</router-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>
