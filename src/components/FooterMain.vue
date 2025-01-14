<script>

export default {

    data() {
        return {
            email: "",
            message: "",
            show: "",
            border: "",
        }
    },
    mounted() {
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


}
</script>

<template>

    <footer class="max-w-[1920px]">

        <section
            class="w-full h-[800px] relative text-[#468097] bg-[url('../assets/img/footer-bg.png')] bg-cover bg-center">


            <div class="max-w-[1280px] py-[90px] m-auto flex flex-col gap-[40px]">

                <section class="w-full relative">
                    <img src="../assets/img/footer-logo.png" alt="">
                </section>


                <section class="w-full flex justify-between text-base font-bold">

                    <div class="relative flex flex-col gap-[18px]">
                        <ul>
                            <li>
                                <h3>聯絡資訊</h3>
                            </li>
                            <li>
                                <h5>天主教曉明社會福利基金會</h5>
                            </li>
                            <li>電話：04-2297-4225</li>
                            <li>傳真：04-22918556</li>

                            <li class="text-[#468097]">
                                <a href="https://maps.app.goo.gl/HtWtvjFcR9YuYuiTA" target="_blank">
                                    <h5>
                                        地址：<span class="border-b border-current">404台中市北區漢口路四段21號</span>
                                    </h5>
                                </a>
                            </li>
                        </ul>

                        <ul>
                            <h3>捐款資訊</h3>
                            <li>
                                <h5>統一編號：17732319</h5>
                            </li>
                            <li>
                                <h5>劃撥帳號：22437936</h5>
                            </li>
                            <li>
                                <h5>戶名：財團法人天主教曉明社會福利基金會</h5>
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-col justify-center relative">
                        <div class="">
                            <h3>訂閱電子報</h3>
                            <h5>輸入您的電子郵件獲得更多活動資訊</h5>
                        </div>

                        <div class="py-[20px] flex relative">
                            <input :class="this.border" v-model="email" type="email" placeholder="輸入您的電子郵件"
                                class=" w-[380px] h-[36px] border-[#468097] border-[2px] rounded-[20px] px-4">
                            <button type="button"
                                class="px-[16px] h-[36px] absolute right-0 text-white bg-[#468097] border-[#468097] border-[2px] rounded-[20px]"
                                @click="submit">
                                <h5>送出</h5>
                            </button>
                        </div>

                        <!-- <div :class="this.show" class="w-full h-[16px] my-[8px]">{{ this.message }}</div> -->

                        <div class="flex gap-[40px]">
                            <a href="https://www.facebook.com/CSCM.stella/?locale=zh_TW" target="_blank"><img
                                    class="w-[36px] h-[36px]" src="../assets/img/icon-fb.png" alt=""></a>
                            <a href="https://www.instagram.com/cscm.stella/" target="_blank"><img
                                    class="w-[36px] h-[36px]" src="../assets/img/icon-ig.png" alt=""></a>
                            <a href="https://www.youtube.com/channel/UCACxSV2GtZV4R2QFrv-zMbw" target="_blank"><img
                                    class="w-[36px] h-[36px]" src="../assets/img/icon-yt.png" alt=""></a>
                        </div>
                    </div>

                    <div>
                        <ul class="relative h-full flex justify-center flex-col gap-[10px]">
                            <li>
                                <h3 class="hover:text-[#468097]/80">關於我們</h3>
                            </li>
                            <li><a href="https://www.catholic-tc.org.tw/about.php?Co=org&No=499" target="_blank">
                                    <h3 class="hover:text-[#468097]/80">聖愛山莊</h3>
                                </a>
                            </li>
                            <li><a href="https://sites.google.com/mail.smgsh.tc.edu.tw/cscm/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF?authuser=0"
                                    target="_blank">
                                    <h3 class="hover:text-[#468097]/80">聖母聖心修女會</h3>
                                </a></li>
                            <li><a href="https://1993gd.org/" target="_blank">
                                    <h3 class= " hover:text-[#468097]/80" >曉明甘丹數位學院</h3>
                                </a></li>
                        </ul>
                    </div>
                </section>

                <section class="relative w-full border-t-[3px] border-current pt-[28px] text-base font-bold">
                    <h5>2024 © 財團法人臺中市雲田社會福利慈善事業基金會 Copyright All Rights Reserved.</h5>
                    <h5>隱私權政策 Design by 閻王誇我身體好</h5>
                </section>

            </div>
        </section>

    </footer>



</template>