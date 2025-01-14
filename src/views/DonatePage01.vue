<script>
import MainContainer from '@/components/MainContainer.vue';
import Banner from '@/components/Banner.vue';

export default {
    components: {
        MainContainer,
        Banner
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
                        世界因您而更美好，您的善舉將成為生命的曙光
                        每一份支持，不僅是一捐款，更是一份改變的力量
                        因為有您，這個世界才充滿愛與無限可能性
                        謝謝您，攜手同行，為需要的人築更好的未來
                    </p>

                </section>

                <section class="flex justify-center">
                    <div class="w-[568px] h-[209px] flex justify-between">
                        <div class="">
                            <img class="w-[114px] h-[114px]" src="../assets/img/donateicon.png" alt="">
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

                            <img class="w-[114px] h-[114px]" src="../assets/img/circle.png" alt="">
                            <ul class=" text-center text-[black]">
                                <h3>step.3</h3>
                                <p>捐款完成</p>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="w-full flex flex-col justify-center gap-[40px] text-[black]">

                    <div class="flex flex-col gap-[12px]">
                        <label for="donatemethood">
                            <p><span class="text-[red]">*</span>捐款專案</p>
                        </label>
                        <input type="number" id="donatemethood" class="w-full h-[50px] bg-[#E6E6E6] rounded-[15px]">
                    </div>

                    <div class="flex flex-col gap-[12px] pb-[40px] border-b-[2px]">
                        <p class=" ">用愛點亮希望，您願意一起改變未來嗎？</p>
                        <div class="flex gap-2">
                            <button type="button"
                                class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">500</button>
                            <button type="button"
                                class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">1000</button>
                            <button type="button"
                                class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">3000</button>
                            <button type="button"
                                class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">5000</button>
                            <button type="button"
                                class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">10000</button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-[12px]">
                        自訂金額
                        <input type="text" class="w-full h-[50px] bg-[#E6E6E6] rounded-[15px]">
                    </div>

                </section>




                <section class="w-full flex flex-col gap-2 pb-[80px]">
                    <p>
                        <span class="text-[red]">*</span>
                        成為長期支持者，或選擇一次性捐款，您想如何參與？
                    </p>

                    <div class="flex gap-2">
                        <button type="button"
                            class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">單次支持</button>
                        <button type="button"
                            class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">3期</button>
                        <button type="button"
                            class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">6期</button>
                        <button type="button"
                            class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">12期</button>
                        <button type="button"
                            class="w-[120px] h-[65px] bg-[#C0C0C0] rounded-[15px] p-5 text-lg">長期支持</button>
                    </div>
                </section>

                <section class="w-full ">
                    <router-link to="DonatePage02">
                        <button type="button"
                            class="w-full py-[12px] bg-[#544962]  hover:bg-[#a79ab8] text-[#FFFFFF] rounded-[50px]">
                            下一步
                        </button>
                    </router-link>
                </section>

            </div>

            <img src="../assets/img/footer-mountain.png" alt="" />
        </MainContainer>
    </main>
</template>