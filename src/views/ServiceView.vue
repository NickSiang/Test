<script>
import monochrome from '@/components/MonoChrome.vue';
import DonateCard from '@/components/DonateCard.vue';
import Marquee from '@/components/Marquee.vue';
import Btn from '@/components/Btn.vue';
import Banner from '@/components/Banner.vue';
import MainContainer from '@/components/MainContainer.vue';
import card1 from '@/assets/img/seervice/education/曉明長青.jpg';
import card2 from '@/assets/img/seervice/education/樂齡.jpg';
import card3 from '@/assets/img/seervice/education/長青學苑.jpg';
import card4 from '@/assets/img/seervice/education/聖愛健康活力中心.jpg';
import card5 from '@/assets/img/seervice/education/曉明優雅學院.jpg';

import card6 from '@/assets/img/seervice/care/社區整合服務中心.jpg';
import card7 from '@/assets/img/seervice/care/居家服務長照機構.jpg';
import card8 from '@/assets/img/seervice/care/社區長照機構(日照).jpg';
import card9 from '@/assets/img/seervice/care/曉明社區關懷據點.jpg';
import card10 from '@/assets/img/seervice/care/快樂學堂.jpg';
import card11 from '@/assets/img/seervice/care/老人諮詢服務中心.jpg';
import card12 from '@/assets/img/seervice/care/家庭照顧者支持服務.jpg';

import card13 from '@/assets/img/seervice/women/西屯婦女及新住民培力中心.jpg';

import card14 from '@/assets/img/seervice/spiritual/環境生態.jpg';
import card15 from '@/assets/img/seervice/spiritual/靈修中心.jpg';

export default {
  data() {
    return {
      servicecard: [
        { label: "教育", tittle: "曉明長青大學", content: "★高齡教育，多元學習興趣養成", src: card1 },
        { label: "教育", tittle: "樂齡學習示範中心", content: "●開發多元的學習型態與行動學習教室，建立社區民眾學習的習慣", src: card2 },
        { label: "教育", tittle: "太平區長青學苑", content: "❤增進長者再進修及社會參與的機會，提昇老人福利服務功能。", src: card3 },
        { label: "教育", tittle: "聖愛健康活力中心", content: "※五大課程主題，以健康促進為主要目標", src: card4 },
        { label: "教育", tittle: "曉明優雅學院", content: "精彩十場次，場場都精彩今年主題很特別!!熱烈報名中", src: card5 },

        { label: "照顧", tittle: "社區整合服務中心", content: "提供從支持家庭、居家、社區到住宿式照顧之多元連續服務", src: card6 },
        { label: "照顧", tittle: "居家長照機構", content: "✔協助社區內失能者居家生活照顧，改善生活品質。", src: card7 },
        { label: "照顧", tittle: "社區長照機構(日照)", content: "★因應高齡化社會長期照顧之需求", src: card8 },
        { label: "照顧", tittle: "曉明社區關懷據點", content: "☆提供健康促進活動、關懷訪視、電話問安、共餐服務", src: card9 },
        { label: "照顧", tittle: "快樂學堂(日托)", content: "▲個案管理照顧暨生活照顧服務", src: card10 },
        { label: "照顧", tittle: "老人諮詢服務中心", content: "★當您孤單時可以想到的老朋友", src: card11 },
        { label: "照顧", tittle: "家庭照顧者支持服務", content: "★到宅照顧技巧指導、個別心理輔導及諮商", src: card12 },

        { label: "婦女", tittle: "西屯婦女及新住民培力", content: "以『文化多元、性別平權』為培力宗旨，辦理豐富之婦女課程、講座", src:card13  },

        { label: "靈修", tittle: "環境生態", content: "守護自然，共創永續未來", src:card14},
        { label: "靈修", tittle: "靈修中心", content: "聖愛山莊--自然、簡樸、寧靜、環保", src:card15},
      ],
      showitems: [],
      filterType: "全部",
      activeButton: "全部",
    };
  },
  mounted() {
    this.showitems = this.servicecard;
  },
  methods: {
    filteredCards(type) {
      this.filterType = type;
      this.activeButton = type;
      if (type === "全部") {
        this.showitems = this.servicecard;
      } else {
        this.showitems = this.servicecard.filter((card) => card.label === type);
      }
    },
  },
  components: {
    monochrome,
    DonateCard,
    Marquee,
    Btn,
    Banner,
    MainContainer,
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
          <h1 class="text-[#468097]">服務項目</h1>
          <div class="w-full py-[50px] relative flex justify-center gap-[10px]">

            <btn v-for="type in ['全部', '教育', '照顧', '婦女', '靈修']" :key="type"
              :class="{ 'bg-[#CFB858] rounded-[32px]': activeButton === type, 'bg-black/20 rounded-[32px]': activeButton !== type }"
              @click="filteredCards(type)">
              {{ type === '全部' ? '全部' : type }}
            </btn>

          </div>
        </div>

        <div class="w-full flex flex-col items-center">

          <div class="w-full flex flex-wrap gap-x-[50px] gap-y-[50px] relative py-[20px]">
            <DonateCard v-for="(card, index) in showitems" :key="index" :label="card.label" :src="card.src"
              :tittle="card.tittle" :content="card.content" />
          </div>

        </div>

        <Marquee></Marquee>
      </div>
      <img src="../assets/img/footer-mountain.png" alt="" />
    </MainContainer>
  </main>
</template>
