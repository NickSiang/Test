<script>
import monochrome from "@/components/MonoChrome.vue";
import DonateCard from "@/components/DonateCard.vue";
import Marquee from "@/components/Marquee.vue";
import Btn from "@/components/Btn.vue";
import Banner from '@/components/Banner.vue'
import MainContainer from '@/components/MainContainer.vue'

import donate1 from '@/assets/img/donate-1.jpg';
import donate2 from '@/assets/img/donate-2.jpg';

import Fundraising1 from '@/assets/img/donate-3.jpg';
import Fundraising2 from '@/assets/img/donate-4.jpg';

export default {
  data() {
    return {
      donatecard: [
     
        {
          label: "捐款",
          src:donate1,
          tittle: "聖愛山莊-建設基金",
          content: "需要您和我們一起完成大自然中的老人福利園區",
          goal: "",
          starttime: "2021.10",
          endtime: "...",
          progressbar: "",
          peoplemount: "",
          day: "",
        },
        {
          label: "捐款",
          src:donate2,
          tittle: "聖愛山莊",
          content: "舉手之勞勞獻愛心,曉明基金會感謝您",
          goal: "",
          starttime: "",
          endtime: "",
          progressbar: "",
          peoplemount: "",
          day: "",
        },
        
        {
          label: "募集",
          src:Fundraising1,
          tittle: "聖愛山莊",
          content: "邀請您一起做公益,歡迎捐物～",
          goal: "剩餘:九人座轎車 一台",
          starttime: "",
          endtime: "",
          progressbar: "67%",
          peoplemount: "",
          day: "無期限",
        },
        {
          label: "募集",
          src:Fundraising2,
          tittle: "聖愛山莊",
          content: "邀請您一起做公益,歡迎捐物～",
          goal: "剩餘:九人座轎車 一台",
          starttime: "",
          endtime: "",
          progressbar: "67%",
          peoplemount: "",
          day: "無期限",
        },
        
      ],
      showitems: [],
      filterType: "捐款",
      activeButton: "捐款",
    };
  },
  mounted() {

    this.showitems = this.donatecard.filter((card) => card.label === "捐款");
  },
  methods: {
    filteredCards(type) {
      this.activeButton = type;
      this.showitems = this.donatecard.filter((card) => card.label === type);
    },
  },
  components: {
    monochrome,
    DonateCard,
    Marquee,
    Btn,
    Banner,
    MainContainer
  },
};
</script>

<template>
  <header>
    <Banner />
  </header>

  <main>
    <MainContainer>
      <div class="w-full max-w-[1280px] ">

        <div class="flex flex-col items-center">
          <h1 class="text-[#468097]">捐贈支持</h1>

          <div class="py-[50px] relative flex gap-[50px]">
            <btn v-for="type in ['捐款', '募集']" :key="type" :class="['rounded-[32px] cursor-pointer',
              activeButton === type ? 'bg-[#CFB858] text-white' : 'bg-black/20']" @click="filteredCards(type)">
              {{ type }}
            </btn>
          </div>
        </div>

        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap gap-x-[50px] gap-y-[50px] relative py-[20px]">
            <DonateCard v-for="(card, index) in showitems" :key="index" :label="card.label" :src="card.src" :tittle="card.tittle"
              :content="card.content" :goal="card.goal" :starttime="card.starttime" :endtime="card.endtime"
              :progressbar="card.progressbar" :peoplemount="card.peoplemount" :day="card.day" />
          </div>

        </div>

        <Marquee />
      </div>

      <img src="../assets/img/footer-mountain.png" alt="" />
    </MainContainer>
  </main>
</template>
