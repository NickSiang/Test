<template>
    <section class=" relative">
        <img v-if="$route.name === 'DonateView' || $route.name === 'DonatePage01'|| $route.name === 'DonatePage02'|| $route.name === 'DonatePage03'|| $route.name === 'DonatePage04'" src="../assets/img/donate-banner.png" alt="">
        <img v-if="$route.name === 'ActivePage01' || $route.name === 'ActivePage02'" src="../assets/img/love-banner.png" alt="">
        <img v-if="$route.name === 'NewView' || $route.name === 'ServiceView'" src="../assets/img/service-banner.png" alt="">
    </section>
</template>