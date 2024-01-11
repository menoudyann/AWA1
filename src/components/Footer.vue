<template>
    <fwb-footer footer-type="logo">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <fwb-footer-brand href="/" src="./src/assets/logo.png"
                    alt="LY ENERGY Logo"/>
                <fwb-footer-link-group
                    class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <fwb-footer-link href="/aboutus">
                        About
                    </fwb-footer-link>
                    <fwb-footer-link href="/privacy-policy">
                        Privacy Policy
                    </fwb-footer-link>
                    <fwb-footer-link href="/licensing">
                        Licensing
                    </fwb-footer-link>
                    <fwb-footer-link href="/contact">
                        Contact
                    </fwb-footer-link>
                </fwb-footer-link-group>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
            <fwb-footer-copyright href="/" by="LY ENERGY" />
        </div>
    </fwb-footer>
</template>

<script setup>
import {
    FwbFooter,
    FwbFooterBrand,
    FwbFooterCopyright,
    FwbFooterLink,
    FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
