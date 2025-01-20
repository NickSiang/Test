<script>
import Card from '@/components/Card.vue';

import hkplanet from '@/assets/img/hk-planet.png'
import hkpacman from '@/assets/img/hk-pacman.png'
import hkpicachu from '@/assets/img/hk-picachu.png'
import hkmicrosoft from '@/assets/img/hk-microsoft.png'
import hkweather from '@/assets/img/hk-weather.png'
import hkcolorgame from '@/assets/img/hk-colorgame.png'

export default {
  mounted() {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 5.8,
        slideShadows: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  data() {
    return {
      DataCard: [
        { link: '', src: hkpacman, label: '', tittle: '小精靈', text: '使用css animation製作' },
        { link: '', src: hkplanet, label: '', tittle: '地球自轉', text: '使用css animation製作' },
        { link: '', src: hkpicachu, label: '', tittle: '皮卡丘', text: '使用css animation製作' },
        { link: '', src: hkcolorgame, label: '', tittle: '色弱遊戲', text: '12' },
        { link: '', src: hkweather, label: '', tittle: '天氣卡', text: '12' },
        { link: '', src: hkmicrosoft, label: '', tittle: '微軟仿切', text: '使用原生css仿切微軟首頁RWD加上swiper製作' },
      ]
    };
  },
  components: {
    Card,
  }
};
</script>

<template>
  <div class="swiper">
    <div class="swiper-wrapper ">
      <!-- 在這裡將 DataCard 中的每個項目傳遞給 Card -->
      <div class="w-fit swiper-slide  text-white flex justify-center items-center"
        v-for="(data, index) in DataCard" :key="index">
        <Card :data="data"></Card> <!-- 傳遞每個 data 給 Card -->
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
  </div>
</template>

<style scoped>
</style>
