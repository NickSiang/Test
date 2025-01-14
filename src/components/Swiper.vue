<script>
import banner1 from '@/assets/img/swiper-banner.png';
import banner2 from '@/assets/img/swiper-banner2.png';

export default {
    data() {
        return {
            images: [
                {
                    src: banner1,
                    tittle: "牽起社區的手，為樂齡打造溫暖的守護",
                    text: "以溫柔的心關注社會需求，結合社區力量，效法聖母的細膩與關愛，打造多元且人性化的服務網絡，守護每一份安心與信任。",
                    link: "想看更多"
                },
                {
                    src: banner2,
                    tittle: "享受在熟悉的環境開始樂齡新篇章",
                    text: "號外號外!老朋友專線要",
                    link: "想看更多"
                },
            ],
            currentImageIndex: 0,
        };
    },
    methods: {
        prevImage() {
            this.currentImageIndex =
                (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentImageIndex =
                (this.currentImageIndex + 1) % this.images.length;
        },
    },
};
</script>

<template>
    <div class="w-full text-[#f3f2e9] relative flex items-center justify-center  bg-cover bg-center">

        <section class="relative max-w-[1400px]  w-full h-[500px] mx-[10%] overflow-hidden">

            <div v-for="(image, index) in images" :key="index"
                :class="['image-box', { active: index === currentImageIndex }]"
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500">

                <div class="flex w-full h-full">

                    <div class="w-1/2 flex flex-col gap-[40px] justify-center  bg-opacity-50 px-[80px] py-[50px]">
                        <h1>{{ image.tittle }}</h1>
                        <h4>{{ image.text }}</h4>
                        <div class="flex justify-center">
                            <router-link to="">
                                <h4 class="group">{{ image.link }} <span class="inline-block group-hover:translate-x-[8px] transition-transform duration-300">→</span></h4>
                            </router-link>
                        </div>
                    </div>

                    <img :src="image.src" alt="" class="w-1/2 object-cover rounded-[50px]">

                </div>
            </div>

        </section>


        <button @click="prevImage"
            class="opacity-[0.7] absolute left-0 top-1/2 transform -translate-y-1/2  cursor-pointer">
            <img src="../assets/img/right-arrow.png" alt="">
        </button>


        <button @click="nextImage"
            class="opacity-[0.7] absolute right-0 top-1/2 transform -translate-y-1/2  cursor-pointer">
            <img src="../assets/img/left-arrow.png" alt="">
        </button>

    </div>
</template>

<style scoped>
.image-box {
    opacity: 0;
    z-index: 0;
}

.image-box.active {
    opacity: 1;
    z-index: 1;
}
</style>
