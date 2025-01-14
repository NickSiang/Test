<script>
import MainContainer from '@/components/MainContainer.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    MainContainer,
    Banner
  },
  data() {
    return {
      cities: [
        { name: '台北市', areas: ['中正區', '大同區', '松山區', '大安區', '萬華區'] },
        { name: '新北市', areas: ['板橋區', '新莊區', '三重區', '永和區', '中和區'] },
        { name: '桃園市', areas: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區'] },
        { name: '台中市', areas: ['北區', '南區', '西區', '東區', '南區'] },
        { name: '台南市', areas: ['中西區', '東區', '南區', '北區', '安平區'] },
        { name: '高雄市', areas: ['苓雅區', '前金區', '左營區', '鼓山區', '三民區'] },
      ],
      selectedCity: '',
      selectedArea: '',
      streetAddress: '',
      name: '',
      phoneNumber: '',
      email: '',
      showError: false, // 控制是否顯示錯誤彈跳視窗
    };
  },
  methods: {
    updateAreas() {
      this.selectedArea = ''; // 清空選擇的地區
    },
    validateForm() {
      if (!this.name || !this.phoneNumber || !this.email || !this.selectedCity || !this.selectedArea || !this.streetAddress) {
        this.showError = true;
      } else {
        this.showError = false;
        this.submit();
      }
    },
    submit() {
      console.log('提交表單');
    },
    closeErrorModal() {
      this.showError = false;
    }
  },
};
</script>

<template>
  <header>
    <Banner />
  </header>

  <main>
    <MainContainer>
      <div
        class="max-w-[1280px] w-[760px] mt-[10px] p-[80px] flex flex-col justify-center items-center gap-[40px] rounded-[50px] bg-[#FFFFFF] text-black">

        <section class="pb-[40px] flex flex-col justify-center items-center">
          <h1 class="flex justify-center text-6xl font-bold pb-[56px]">捐款支持</h1>
          <p class="flex justify-center gap-8 text-[#808080]">
            我們需要一些基本資訊，好讓您的善舉被妥善記錄並傳遞溫暖。同時，這也能確保您享有捐款扣稅等權益，感謝您支持這份使命！
          </p>
        </section>

        <section class="flex justify-center">
          <div class="w-[568px] h-[209px] flex justify-between">
            <div>
              <img class="w-[114px] h-[114px]" src="../assets/img/donate2icon.png" alt="">
              <ul class="text-center text-[black]">
                <h3>step.1</h3>
                <p>選擇捐款</p>
              </ul>
            </div>
            <div>
              <img class="w-[114px] h-[114px]" src="../assets/img/imformaing.png" alt="">
              <ul class="text-center text-[black]">
                <h3>step.2</h3>
                <p>填寫資訊</p>
              </ul>
            </div>
            <div>
              <img class="w-[114px] h-[114px]" src="../assets/img/circle.png" alt="">
              <ul class="text-center text-[black]">
                <h3>step.3</h3>
                <p>捐款完成</p>
              </ul>
            </div>
          </div>
        </section>

        <div v-if="showError" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
            <h2 class="text-xl font-bold text-red-500 mb-4">錯誤</h2>
            <p class="text-gray-700 mb-4">請填寫所有必填資料！</p>
            <button @click="closeErrorModal" class="bg-red-500 text-white py-2 px-4 rounded-full">
              關閉
            </button>
          </div>
        </div>

        <section class="w-full flex flex-col justify-center text-[black] pb-[80px]">
          <div class="flex flex-col gap-[18px] mb-[30px]">
            <p>是否同意縣市於感謝名單</p>
            <div class="flex gap-[20px]">
              <label>
                <input type="radio" name="option" value="是"> 匿名捐贈
              </label>
              <label>
                <input type="radio" name="option" value="否"> 實名捐贈
              </label>
            </div>
          </div>

          <div class="flex gap-y-2 flex-col mb-[40px]">
            <div class="flex gap-y-2 flex-col">
              <label for="name"><span class="text-[red]">*</span>姓名</label>
              <input type="text" id="name" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]" v-model="name">
            </div>
            <div class="flex gap-y-2 flex-col">
              <label for="phone"><span class="text-[red]">*</span>電話</label>
              <input type="text" id="phone" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                v-model="phoneNumber">
            </div>
            <div class="flex gap-y-2 flex-col">
              <label for="email">電子郵件</label>
              <input type="text" id="email" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                v-model="email">
            </div>
          </div>

          <div class="flex gap-y-2 flex-wrap justify-between">
            <div class="flex gap-y-2 flex-col">
              <p>縣市</p>
              <select id="city" class="w-[272px] h-[40px] px-2 bg-[#D9D9D9] rounded-[10px]" v-model="selectedCity"
                @change="updateAreas">
                <option value="">請選擇縣市</option>
                <option v-for="city in cities" :key="city.name" :value="city.name">{{ city.name }}</option>
              </select>
            </div>

            <div class="flex gap-y-2 flex-col">
              <p>地區</p>
              <select id="area" class="w-[272px] h-[40px] px-2 bg-[#D9D9D9] rounded-[10px]" v-model="selectedArea">
                <option value="">請選擇地區</option>
                <option v-for="area in cities.find(city => city.name === selectedCity)?.areas || []" :key="area"
                  :value="area">{{ area }}</option>
              </select>
            </div>

            <div class="w-full flex gap-y-2 flex-col">
              <label for="address">街道資訊</label>
              <input type="text" id="address" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                v-model="streetAddress" placeholder="請輸入您的街道地址">
            </div>
          </div>
        </section>

        <section class="flex gap-[20px] text-white">
          <router-link to="DonatePage01">
            <div class="px-[60px] py-[12px] rounded-[50px] bg-[#544962] hover:bg-[#a79ab8]">返回</div>
          </router-link>
          <div @click="validateForm" class="px-[60px] py-[12px] rounded-[50px] bg-[#544962] cursor-pointer hover:bg-[#a79ab8]">
            下一步
          </div>
        </section>

        <router-link to="DonatePage03">
          <div class="px-[60px] py-[12px] rounded-[50px] text-white bg-[#54496247] hover:bg-[#a79ab8]">跳過驗證下一頁</div>
        </router-link>
      </div>

      <img src="../assets/img/footer-mountain.png" alt="">
    </MainContainer>
  </main>
</template>
