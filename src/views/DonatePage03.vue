<script>
import MainContainer from '@/components/MainContainer.vue';
import Banner from '@/components/Banner.vue';

export default {
    components: {
        MainContainer,
        Banner,
    }
}
</script>

<template>
    <header>
        <Banner />
    </header>
    <main>
        <MainContainer>
            <div
                class="max-w-[1280px] w-[760px] mt-[10px] p-[80px] flex flex-col justify-center items-center gap-[40px] rounded-[50px] bg-[#FFFFFF]  text-black">


                <section class=" pb-[40px] flex flex-col justify-center items-center">
                    <h1 class="flex justify-center text-6xl font-bold pb-[56px]">捐款支持</h1>

                    <p class="flex justify-center gap-8 text-[#808080] ">
                        選擇適合您的方式，讓這份愛心順利抵達！每一次支持，都是為需要幫助的人點亮一盞燈，感謝您的無私付出！
                    </p>

                </section>

                <section class="flex justify-center ">
                    <div class="w-[568px] h-[209px] flex justify-between">
                        <div class="">
                            <img class="w-[114px] h-[114px]" src="../assets/img/donate2icon.png" alt="">
                            <ul class="text-center text-[black]">
                                <h3>step.1</h3>
                                <p>選擇捐款</p>
                            </ul>
                        </div>
                        <div class="">
                            <img class="w-[114px] h-[114px]" src="../assets/img/imformationicon.png" alt="">
                            <ul class="text-center text-[black]">
                                <h3>step.2</h3>
                                <p>填寫資訊</p>
                            </ul>
                        </div>
                        <div class="">

                            <img class="w-[114px] h-[114px]" src="../assets/img/step3.png" alt="">
                            <ul class=" text-center text-[black]">
                                <h3>step.3</h3>
                                <p>捐款完成</p>
                            </ul>
                        </div>
                    </div>
                </section>


                <section class="w-full flex flex-col gap-[18px] mb-[30px]">
                    <p>是否需要收據</p>
                    <div class="flex gap-[20px]">
                        <label>
                            <input type="radio" name="option" value="是"> 是
                        </label>
                        <label>
                            <input type="radio" name="option" value="否"> 否
                        </label>
                    </div>
                </section>

                <section class="w-full flex gap-y-2 flex-col pb-[40px]  border-b-[2px]">
                    <div class="flex gap-y-2 flex-col">
                        <label for="textbill1">收據台頭</label>
                        <input type="text" id="textbill1" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                            v-model="email">
                    </div>

                    <div class="flex gap-y-2 flex-col">
                        <label for="textbill">報稅憑證</label>
                        <input type="text" id="textbill" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                            v-model="email">
                    </div>

                    <div class="flex gap-y-2 flex-col">
                        <label for="email">電子郵件</label>
                        <input type="text" id="email" class="w-full h-[40px] bg-[#D9D9D9] rounded-[10px] px-[20px]"
                            v-model="email">
                    </div>
                </section>

                <section class="flex justify-center flex-col text-[black] gap-y-[15px] pb-[80px]">
                    <p>
                        選擇最方便的支付方式，讓愛心輕鬆傳遞給需要的人
                    </p>
                    <div class="flex justify-center gap-[25px]">
                        <button type="button" class="w-[181px] h-[62px] bg-[#C0C0C0] rounded-[10px]">信用卡</button>
                        <button type="button" class="w-[181px] h-[62px] bg-[#C0C0C0] rounded-[10px]">便利超商</button>
                        <button type="button" class="w-[181px] h-[62px] bg-[#C0C0C0] rounded-[10px]">Apple pay</button>
                    </div>
                </section>

             

                <section class="flex gap-[20px] text-white ">
                    <router-link to="DonatePage02">
                        <div class="px-[60px] py-[12px] rounded-[50px] bg-[#544962] hover:bg-[#a79ab8]">返回</div>
                    </router-link>
                    <router-link to="DonatePage04">
                        <div class="px-[60px] py-[12px] rounded-[50px] bg-[#544962] hover:bg-[#a79ab8]">下一步</div>
                    </router-link>
                </section>

                
        
            </div>

            <img src="../assets/img/footer-mountain.png" alt="" />
        </MainContainer>
    </main>
</template>