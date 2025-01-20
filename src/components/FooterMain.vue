<script>
export default {
    data() {
        return {
            email: "",
            message: "",
            show: "",
            border: "",
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
 
}

</script>

<template>
    <section class="w-full h-[400px] flex flex-col bg-black/50 p-[40px]">
        <div class="w-[480px] flex flex-col justify-center relative">
            <div class="">
                <h3>歡迎聯絡</h3>
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
                <a href="https://www.instagram.com/cscm.stella/" target="_blank"><img class="w-[36px] h-[36px]"
                        src="../assets/img/icon-ig.png" alt=""></a>
                <a href="https://www.youtube.com/channel/UCACxSV2GtZV4R2QFrv-zMbw" target="_blank"><img
                        class="w-[36px] h-[36px]" src="../assets/img/icon-yt.png" alt=""></a>
            </div>
        </div>
    </section>
</template>