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
        <fwb-navbar-link is-active link="/">Home</fwb-navbar-link>
        <fwb-navbar-link link="/aboutus">About us</fwb-navbar-link>
        <fwb-navbar-link link="/contact">Contact</fwb-navbar-link>
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
