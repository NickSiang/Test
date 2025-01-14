<script>
import monochrome from '@/components/MonoChrome.vue';
import DonateCard from '@/components/DonateCard.vue';
import Marquee from '@/components/Marquee.vue';
import Btn from '@/components/Btn.vue';
import Banner from '@/components/Banner.vue';
import MainContainer from '@/components/MainContainer.vue';
import QQ from '@/assets/img/seervice/QQ.jpg';

export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: '選擇分類',
      subOptions: [],
      selectedSubOption: null,
      servicecard: [
        { label: "教育", sublabel: "曉明長青大學", tittle: "施工中(說明)", content: "目前剩放資料進去,此頁面先選完服務後,旁邊下拉式選單會出現對應機構", img: QQ },
        { label: "教育", sublabel: "曉明長青大學", tittle: "【開課訊息】114年曉明長青大學課程簡章", content: "114年簡章【上學期】114年03月03日～06月20日【下學期】114年09月01日～12月19日", img: QQ },
        { label: "教育", sublabel: "曉明長青大學", tittle: "【開課訊息】114年(寒假) 曉明長青大學課程簡章", content: "14年(寒假)簡章上課時間：114年1月6日～2月21日(6週)早鳥優惠價~即日起到12月20日前享有折扣100元", img: QQ },


        { label: "教育", sublabel: "樂齡學習示範中心", tittle: "樂齡學習示範中心", img: QQ },
        { label: "教育", sublabel: "太平區長青學苑", tittle: "太平區長青學苑", img: QQ },
        { label: "教育", sublabel: "聖愛健康活力中心", tittle: "聖愛健康活力中心", img: QQ },
        { label: "教育", sublabel: "曉明優雅學院", tittle: "曉明優雅學院", img: QQ },
        { label: "照顧", sublabel: "社區整合服務中心", tittle: "社區整合服務中心", img: QQ },
        { label: "照顧", sublabel: "居家長照機構", tittle: "居家長照機構", img: QQ },
        { label: "照顧", sublabel: "社區長照機構(日照)", tittle: "社區長照機構(日照)", img: QQ },
        { label: "照顧", sublabel: "曉明社區關懷據點", tittle: "曉明社區關懷據點", img: QQ },
        { label: "照顧", sublabel: "快樂學堂(日托)", tittle: "快樂學堂(日托)", img: QQ },
        { label: "照顧", sublabel: "老人諮詢服務中心", tittle: "老人諮詢服務中心", img: QQ },
        { label: "婦女", sublabel: "西屯婦女及新住民培力", tittle: "西屯婦女及新住民培力", img: QQ },
        { label: "靈修", sublabel: "環境生態", tittle: "環境生態", img: QQ },
        { label: "靈修", sublabel: "靈修中心", tittle: "靈修中心", img: QQ },
      ],
      showitems: [],
      filterType: "全部",
      selectedOption: "全部",
      type: 'false',
    };
  },
  components: {
    monochrome,
    DonateCard,
    Marquee,
    Btn,
    Banner,
    MainContainer,
  },
  mounted() {
    this.showitems = this.servicecard;
    this.updateSubOptions("全部");
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.selectedSubOption = null;

      if (option === "全部") {
        this.showitems = this.servicecard;
        this.updateSubOptions(option);
      }
      else {
        const filteredItems = this.servicecard.filter((card) => card.label === option);
        this.showitems = filteredItems;
        this.updateSubOptions(option);
      }
      this.isDropdownOpen = false;
    },
    selectSubOption(subOption) {
      this.selectedSubOption = subOption;

      if (this.selectedOption === "全部") {
        this.showitems = this.servicecard.filter(
          (card) => !subOption || card.sublabel === subOption
        );
      } else {
        this.showitems = this.servicecard.filter(
          (card) =>
            card.label === this.selectedOption &&
            (!subOption || card.sublabel === subOption)
        );
      }
    },
    updateSubOptions(option) {
      if (option === "全部") {

        const allSubcategories = new Set(
          this.servicecard.map((card) => card.sublabel).filter(Boolean)
        );
        this.subOptions = Array.from(allSubcategories);
      } else {

        const uniqueSubcategories = new Set(
          this.servicecard
            .filter((card) => card.label === option)
            .map((card) => card.sublabel)
            .filter(Boolean)
        );
        this.subOptions = Array.from(uniqueSubcategories);
      }
    },
  },
};
</script>

<template>
  <Banner />
  <main>
    <MainContainer>
      <div class="max-w-[1280px] w-full">
        <div class="flex flex-col items-center">
          <h1 class="text-[#468097]">最新消息</h1>

          <div class="w-full flex justify-between">

            <div class=" py-[50px] relative flex gap-[10px] ">
              <btn @click="selectOption('全部')"
                :class="selectedOption === '全部' ? 'bg-[#CFB858] rounded-[32px]' : 'bg-black/20 rounded-[32px]'">
                全部
              </btn>
              <btn @click="selectOption('教育')"
                :class="selectedOption === '教育' ? 'bg-[#CFB858] rounded-[32px]' : 'bg-black/20 rounded-[32px]'">
                社區教育
              </btn>
              <btn @click="selectOption('照顧')"
                :class="selectedOption === '照顧' ? 'bg-[#CFB858] rounded-[32px]' : 'bg-black/20 rounded-[32px]'">
                關懷照護
              </btn>
              <btn @click="selectOption('婦女')"
                :class="selectedOption === '婦女' ? 'bg-[#CFB858] rounded-[32px]' : 'bg-black/20 rounded-[32px]'">
                婦女成長
              </btn>
              <btn @click="selectOption('靈修')"
                :class="selectedOption === '靈修' ? 'bg-[#CFB858] rounded-[32px]' : 'bg-black/20 rounded-[32px]'">
                心靈冥想
              </btn>

            </div>

            <div v-if="subOptions.length" class="flex justify-center items-center">
              <div class="relative w-[380px] container ">
                <div class="relative h-[80px] text-white  border-[3px] bg-black/20 rounded-[32px] cursor-pointer"
                  @click="toggleDropdown">
                  <h2 class="h-[80px] flex justify-center items-center gap-5 ">
                    {{ selectedSubOption || "選擇子分類" }}
                    <div v-if="isDropdownOpen">▲</div>
                    <div v-else>▼</div>
                  </h2>
                </div>
                <ul v-if="isDropdownOpen"
                  class="absolute left-0 w-full max-h-[500px] bg-[#86a9ad] shadow-md rounded-[32px] overflow-auto z-10 mt-2">
                  <li v-for="(subOption, index) in subOptions" :key="index"
                    class="h-[80px] flex justify-center items-center px-4 py-2 text-lg text-white cursor-pointer hover:bg-[#CFB858]"
                    @click="selectSubOption(subOption)">
                    <p class="text-[26px]">{{ subOption }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片區域 -->
        <div class="w-full flex flex-col items-center">
          <div class="w-full flex flex-wrap gap-x-[50px] gap-y-[50px] relative py-[20px]">
            <DonateCard v-for="(card, index) in showitems" :key="index" :label="card.label" :tittle="card.tittle"
              :src="card.img" :content="card.content" />
          </div>
        </div>

        <Marquee />
      </div>
      <img src="../assets/img/footer-mountain.png" alt="" />
    </MainContainer>
  </main>
</template>

<style scoped>
ul {
  overflow-y: auto;
  overflow-x: hidden;
}

ul::-webkit-scrollbar {
  width: 16px;
  border-radius: 16px;
}

ul::-webkit-scrollbar-thumb {
  background-color: #b1b1b1;
  border-radius: 16px;
}

ul::-webkit-scrollbar-track {
  background-color: #f3f3f3;
  border-radius: 16px;
}
</style>