<script>
import MainContainer from '@/components/MainContainer.vue';
import Banner from '@/components/Banner.vue';
import Marquee from '@/components/Marquee.vue';

export default {
    components: {
        MainContainer,
        Banner,
        Marquee
    },
    data() {
        return {
            ages: []  // 用來儲存年齡選項
        };
    },
    mounted() {
        // 當組件掛載後生成年齡範圍
        this.generateAgeOptions();
    },
    methods: {
        generateAgeOptions() {
            // 生成從18到100歲的年齡範圍
            for (let i = 18; i <= 100; i++) {
                this.ages.push(i);
            }
        }
    }
};
</script>

<template>
    <header>
        <Banner />
    </header>
    <main>
        <MainContainer>
            <div
                class=" max-w-[1280px] mt-[10px] p-[80px] flex flex-col justify-center items-center gap-[40px] rounded-[50px] bg-[#FFFFFF]  text-black">

                <section class="w-full pb-[40px] flex flex-col justify-center items-center">

                    <h1 class="w-full flex justify-center pb-[80px]">新住民家庭活動</h1>

                    <div class="w-full pb-[40px]">
                        <p class="text-[40px] pb-[20px]">活動資訊</p>
                        <p>時間：01/14（四）早上10:00-12:00</p>
                        <p>地點：西屯婦培中心2樓會議室（台中市西屯區光明路160號2樓</p>
                        <p>内容：葉脈書籤製作、性別平等宣導</p>
                        <p>對象：一般民眾，以新住民為優先人數：20人</p>
                        <p>費用：免費，請自備廢棄牙刷</p>
                    </div>

                    <div class="w-full">
                        <p class="text-[40px] pb-[20px]">活動提醒</p>
                        <p>本活動提供托育服務，若有托育需求請填寫於表單中~</p>
                        <p> 1.以新住民為優先，中心會收取佐證文件檢視是否符合資格~</p>
                        <p> 2.採電話及線上表單報名，提交表單後，由社工主動與您聯緊才算是報名成功喔！</p>
                        <p> 3.活動詳情請洽：西屯婦女及新住民培力中心 04-24527113 陳玟諭、林佳慧</p>
                    </div>

                </section>

                <section class="w-full flex gap-[56px] pb-[40px] border-b-[2px]">

                    <div class="flex gap-y-2 flex-col">

                        <div class="flex gap-y-2 flex-col ">
                            <label for="name">姓名</label>
                            <input type="text" id="name"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="phone">電話</label>
                            <input type="text" id="phone"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="age">年齡</label>
                            <select id="age" name="age" class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[6px]">
                                <option class="absolute" v-for="age in ages" :key="age" :value="age">{{ age }}歲</option>
                            </select>
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="country">國籍</label>
                            <input type="text" id="country"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                    </div>


                    <div class="flex flex-col gap-y-2 ">

                        <div class="flex gap-[28px]">
                            <div class="flex flex-col gap-[18px] mb-[6px]">
                                <p class="">性別</p>
                                <div class="flex gap-[20px]">
                                    <label>
                                        <input type="radio" name="option" value="是"> 男
                                    </label>
                                    <label>
                                        <input type="radio" name="option" value="否"> 女
                                    </label>
                                </div>
                            </div>
                            <div class="flex flex-col gap-[18px] mb-[6px]">
                                <p class="">飲食</p>
                                <div class="flex gap-[20px]">
                                    <label>
                                        <input type="radio" name="option" value="是"> 葷食
                                    </label>
                                    <label>
                                        <input type="radio" name="option" value="否"> 素食
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="flex gap-y-2 flex-col ">
                            <label for="email">電子郵件 </label>
                            <input type="text" id="email"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="study">學歷 </label>
                            <input type="text" id="study"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="location">地區</label>
                            <input type="text" id="location"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                    </div>

                </section>



                <section class="w-full flex gap-[56px] pb-[40px] border-b-[2px]">
                    <div class="flex flex-col gap-y-2 ">
                        <div class="flex gap-y-2 flex-col ">
                            <label for="text">緊急聯絡人姓名</label>
                            <input type="text" id="name"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                        <div class="flex gap-y-2 flex-col ">
                            <label for="text">緊急聯絡人電話</label>
                            <input type="text" id="phonenumber"
                                class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-2 ">
                        <div>
                            <div class="flex flex-col gap-[18px] mb-[6px]">
                                <p class="">是否同意肖像授權 (活動側錄影像)</p>
                                <div class="flex gap-[20px]">
                                    <label>
                                        <input type="radio" name="option" value="是"> 男
                                    </label>
                                    <label>
                                        <input type="radio" name="option" value="否"> 女
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label for="age">親屬關係</label>
                        <input type="text" id="phonenumber"
                            class="w-[340px] h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]">
                    </div>
                </section>


                <section class="w-full pb-[40px]">
                    <img src="../assets/img/reCAPTCHA.png" alt="">
                </section>

                <section class=" flex gap-[20px] text-white">
                    <router-link to="/">
                        <div class="px-[60px] py-[12px] rounded-[50px] bg-[#544962]  hover:bg-[#a79ab8]">返回</div>
                    </router-link>
                    <router-link to="ActivePage02">
                        <div class="px-[60px] py-[12px] rounded-[50px] bg-[#544962]  hover:bg-[#a79ab8]">送出</div>
                    </router-link>
                </section>

            </div>


            <!-- <Marquee></Marquee> -->

            <img src="../assets/img/footer-mountain.png" alt="">

        </MainContainer>
    </main>
</template>
