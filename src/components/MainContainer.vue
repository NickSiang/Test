<template>
    <section class="w-full  flex flex-col items-center bg-[url('../assets/img/bg.png')] bg-cover text-[#468097] ">

        <section v-if="$route.name === 'DonatePage01'|| $route.name === 'DonatePage02'|| $route.name === 'DonatePage03'|| $route.name === 'DonatePage04'|| $route.name === 'ActivePage01'|| $route.name === 'ActivePage02'" class="absolute -translate-y-[99%] bg-cover bg-[url('../assets/img/page-light.png')]">
            <img class="relative opacity-0" src="../assets/img/page-light.png" alt="">
        </section>
        <section v-if="$route.name === 'DonateView' || $route.name === 'NewView' || $route.name === 'ServiceView'"  class="absolute -translate-y-[99%] bg-cover bg-[url('../assets/img/light-1.png')]">
            <img class="relative opacity-0" src="../assets/img/light-1.png" alt="">
        </section>
      
        <slot></slot>

    </section>
</template>