<script>
import MonoChrome from "@/components/MonoChrome.vue";
import DonateCard from "@/components/DonateCard.vue";
import Marquee from "@/components/Marquee.vue";
import Swiper from "@/components/Swiper.vue";

import card1 from '@/assets/img/bg.png';
import card2 from '@/assets/img/donate-1.jpg';
import card3 from '@/assets/img/seervice/ex1.jpg';

export default {
    data() {
        return {
            maincard: [
                {
                    link: "",
                    label: "募集",
                    src: card1,
                    tittle: "範例卡片",
                    content: "當卡片給全部資料時的樣子(會判斷頁面或標籤來長出對應內容) 文字最多兩行 文字最多兩行 文字最多兩行 文字最多兩行",
                    goal: "進度條目標",
                    starttime: "開始日期",
                    endtime: "結束日期",
                    progressbar: "50%",
                    peoplemount: "參加人數",
                    day: "共幾天",
                },
                {
                    link: "DonatePage01",
                    label: "捐款",
                    src: card2,
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
                    link: "ActivePage01",
                    label: "婦女",
                    src: card3,
                    tittle: "新住民家庭活動",
                    content: "透過多元文化交流與溫馨活動，讓新住民家庭共創幸福與融和的美好時光。",
                    goal: "",
                    starttime: "即日起",
                    endtime: "2025.01.14",
                    progressbar: "",
                    peoplemount: "參加人數:20人",
                    day: "",
                },
            ],
            currentNewsIndex: 0,
            newsList: [
                {
                    date: "2024-01-05",
                    message: "我們進行中的志工服務有愛相傳火熱報名中!",
                },
                {
                    date: "2024-02-01",
                    message: "新春關懷活動即將開跑，歡迎加入我們！🧨",
                },
                {
                    date: "2024-03-10",
                    message: "🎀🎀女性關懷計劃第二期課程報名開放！",
                },
            ],
        }
    },
    components: {
        MonoChrome,
        DonateCard,
        Marquee,
        Swiper
    },
    mounted() {
        this.startNewsRotation();
        let all = document.getElementById("all");
        let imagePanel = document.getElementsByClassName("image");

        for (let i = 0; i < imagePanel.length; i++) {
            imagePanel[i].addEventListener("mouseover", function () {
                // 放大滑鼠懸停的圖片，縮小其餘圖片
                imagePanel[i].style.flex = "2";
                for (let j = 0; j < imagePanel.length; j++) {
                    if (j !== i) {
                        imagePanel[j].style.flex = "1";
                    }
                }
            });

            imagePanel[i].addEventListener("mouseout", function () {
                // 恢復所有圖片的初始狀態
                for (let j = 0; j < imagePanel.length; j++) {
                    imagePanel[j].style.flex = "1";
                }
            });
        }
    },
    computed: {
        currentNews() {
            return this.newsList[this.currentNewsIndex];
        },
    },
    methods: {
        startNewsRotation() {
            setInterval(() => {
                this.currentNewsIndex =
                    (this.currentNewsIndex + 1) % this.newsList.length;
            }, 5000); 
        },
    },
};
</script>

<template>

    <header class="h-[920px] flex flex-col item-center sticky top-0 cursor-pointer">
        <section
            class="absolute bg-fixed top-0 -z-10 w-full h-[100vh] animate-moveBackground bg-[url('../assets/img/header-bg.png')] bg-cover bg-center">
            <img class="absolute top-0 bg-fixed -z-10" src="../assets/img/header-bannar.png" alt="" />
        </section>
        <section class="w-full h-full flex items-center">
            <div
                class="w-fit h-[120px] mx-[10%] mt-[172px] p-[30px] flex items-center gap-[32px] rounded-[22px] bg-black/30 backdrop-blur-[30px] text-white">
                <div class="text-[32px]">NEWS</div>
                <div>
                    <h5>{{ currentNews.date }}</h5>
                    <h5>{{ currentNews.message }}</h5>
                </div>
            </div>
        </section>
    </header>

    <main class=" max-w-[1920px] relative flex items-center flex-col bg-[url('../assets/img/main-bg.png')] bg-cover">
        <!-- <img class="opacity-0" src="../assets/img/main-bg-m.png" alt=""> -->
        <Swiper class="mt-[800px] mb-[500px]"></Swiper>


        <div class="max-w-[1280px] w-full flex flex-col">

            <section class="w-full h-[560px] my-[200px] ">

                <div class="w-full h-full flex justify-between relative">

                    <div class="w-1/2 flex flex-col justify-around items-center">
                        <h1 class="text-[#468097]">我們提供關懷服務</h1>
                        <div class="w-[400px] h-[400px] bg-white/50 rounded-[50%] ">
                            <img src="../assets/img/main-circle.png" alt="">
                        </div>
                    </div>

                    <div id="all" class="flex w-1/2 px-[80px] items-center flex-col ">

                        <div class="image active rounded-[50px] flex-[1] w-full relative m-[10px] group">
                            <router-link to="">
                                <div class="w-full h-full px-7 py-2 flex gap-5 items-end">
                                    <h2 class="text-white">教育</h2>
                                    <h5
                                        class="text-white opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-1000">
                                        溫柔的心關注社會需求，結合社區力量</h5>
                                </div>
                            </router-link>
                        </div>

                        <div class="image active rounded-[50px] flex-[1] w-full relative m-[10px] group">
                            <router-link to="">
                                <div class="w-full h-full px-7 py-2 flex gap-5 items-end">
                                    <h2 class="text-white">教育</h2>
                                    <h5
                                        class="text-white opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-1000">
                                        溫柔的心關注社會需求，結合社區力量</h5>
                                </div>
                            </router-link>
                        </div>

                        <div class="image active rounded-[50px] flex-[1] w-full relative m-[10px] group">
                            <router-link to="">
                                <div class="w-full h-full px-7 py-2 flex gap-5 items-end">
                                    <h2 class="text-white">教育</h2>
                                    <h5
                                        class="text-white opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-1000">
                                        溫柔的心關注社會需求，結合社區力量</h5>
                                </div>
                            </router-link>
                        </div>

                        <div class="image active rounded-[50px] flex-[1] w-full relative m-[10px] group">
                            <router-link to="">
                                <div class="w-full h-full px-7 py-2 flex gap-5 items-end">
                                    <h2 class="text-white">教育</h2>
                                    <h5
                                        class="text-white opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-1000">
                                        溫柔的心關注社會需求，結合社區力量</h5>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>
            </section>

            <section class="w-full flex flex-col items-center ">

                <div class="w-full mt-[500px] mb-[100px]">
                    <h1 class="mb-[50px] text-white">最新消息</h1>
                    <div class="w-full flex justify-between gap-x-[30px] gap-y-[50px] relative py-[20px]">
                        <DonateCard v-for="(card, index) in maincard" :key="index" :link="card.link" :label="card.label"
                            :src="card.src" :tittle="card.tittle" :content="card.content" :goal="card.goal"
                            :starttime="card.starttime" :endtime="card.endtime" :progressbar="card.progressbar"
                            :peoplemount="card.peoplemount" :day="card.day" />
                    </div>
                </div>
            </section>

            <Marquee />
        </div>
        <img src="../assets/img/footer-mountain.png" alt="" />
    </main>

</template>

<style scoped>
.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: flex 0.7s cubic-bezier(0.05, 0.6, 0.4, 0.9);
    background-image: url(../assets/img/seervice/education/曉明長青.jpg);
}

.image.active {
    flex: 1;
}
</style>
