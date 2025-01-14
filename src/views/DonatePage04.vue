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
};
</script>

<template>
    <header>
        <Banner />
    </header>
    <main>
        <MainContainer>
            <div
                class="max-w-[1280px] mt-[10px] p-[80px] flex flex-col justify-center items-center gap-[40px] rounded-[50px] bg-[#FFFFFF]  text-black">


                <h1>繳費成功</h1>
                <h5>請務必確認信箱是否有收到捐贈明細或收據信件</h5>


                <img src="../assets/img/activedone.png" alt="">

                <router-link to="/" class="w-full"> 
                <div class="w-full px-[60px] py-[12px] text-center rounded-[50px]  text-white bg-[#544962]  hover:bg-[#a79ab8]">
                    返回首頁
                </div>
            </router-link>


            </div>


            <Marquee></Marquee>

            <img src="../assets/img/footer-mountain.png" alt="">

        </MainContainer>
    </main>
</template>
