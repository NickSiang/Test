<script>
import FooterMain from '@/components/FooterMain.vue';
import Progress from '@/components/Progress.vue';
import Swiper from '@/components/Swiper.vue';

import hkplanet from '@/assets/img/hk-planet.png'
import hkpacman from '@/assets/img/hk-pacman.png'
import hkpicachu from '@/assets/img/hk-picachu.png'
import hkmicrosoft from '@/assets/img/hk-microsoft.png'
import hkweather from '@/assets/img/hk-weather.png'
import hkcolorgame from '@/assets/img/hk-colorgame.png'

export default {
    data() {
        return {
            email: "",
            message: "",
            show: "",
            border: "",
            SkillData: [
                { skill: 'html', percent: 80 },
                { skill: 'css', percent: 82 },
                { skill: 'boostrap', percent: 70 },
                { skill: 'tailwind', percent: 80 },
                { skill: 'js', percent: 70 },
                { skill: 'vue.js', percent: 60 },
                { skill: 'Figma', percent: 70 },
            ]

        }
    }, mounted() {
        emailjs.init('FWOuZjvYJe6rfSKOI');
    },

    methods: {
        submit() {

            if (!this.email) {
                this.message = "請輸入電子郵件地址。";
                this.show = "text-[red]";
                this.border = "border-[red]";
                return;

            } else if (!this.validateEmail(this.email)) {
                this.message = "電子郵件格式錯誤。";
                this.show = "text-[red]";
                this.border = "border-[red]";
                this.email = '';
                return;
            }

            const templateParams = {
                to_email: this.email,
                from_email: 's28688117@gmail.com',
            };

            const serviceID = 'default_service';
            const templateID = 'template_jyhwspp';

            emailjs.send(serviceID, templateID, templateParams)  // 替換為你的 Service ID 和 Template ID
                .then(function (response) {
                    alert("郵件發送成功！" + response.text);
                }, function (error) {
                    alert("發送失敗：" + error.text);

                });

            this.email = '';
            this.border = "";
        },

        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    },
    components: {
        Progress,
        Swiper,
        FooterMain
    }
}

</script>

<template>

    <div class=" m-auto flex flex-col items-center ">

        <div class="w-full max-w-[1280px] pt-[60px]">

            <header class="w-full rounded-[20px] shadow-custom-shadow">

                <section class="w-full h-full bg-black/20 flex gap-20 rounded-t-[20px] p-[40px]">

                    <div class=" h-[360px] bg-white  rounded-[20px]">
                        <div class="w-[280px] h-[280px] bg-black/50 rounded-t-[20px]">自我介紹</div>
                    </div>

                    <div class="w-full bg-[#fcfcfc]">
                        <p>
                            我是一名正在努力成為前端工程師的求職者，透過朋友的推薦參加了職訓課程，開始接觸程式設計。雖然技術仍在發展中，但我對自我成長充滿熱情，並持續精進，不斷提升能力。
                        </p>

                    </div>


                </section>

                <section class="w-full flex flex-col p-5 bg-black/30 rounded-b-[20px]">
                    <div class=" h-full ">Skill</div>
                    <div class="w-full flex justify-around">

                        <Progress v-for="(item, index) in SkillData" :key="index" :data="item"></Progress>
                    </div>
                </section>

            </header>


            <main class="w-full ">

                <section class="w-full mt-20 rounded-[5px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
                    <div class="w-full h-full p-2 rounded-[5px] relative animate-moveBackground bg-[url('../assets/img/project-bg.png')]">
                        <img class="border-[10px]  rounded-[5px] shadow-[0_1px_3px_rgba(0,0,0,0.2)]" src="../assets/img/project-bannar.png" alt="">
                        <div class="w-[36%] h-[60%] p-10 bg-[white]/30 backdrop-blur-[20px] absolute top-[16%] left-[8%]">
                        <h2 class="text-[48px] font-bold">團體專題</h2>
                        <h3 class="text-[28px] font-bold">天主教曉明基金會官網優化</h3>
                        <p class="text-[18px]">在此專案擔任PM,並參與企劃以及程式的部分</p>
                        </div>
                    </div>
                </section>


                <section class="w-full my-[120px]">
                    <h2><span class="border-b-[2px]">作品集</span></h2>
                    <Swiper />
                </section>
            </main>

            <FooterMain></FooterMain>
        </div>

    </div>

</template>