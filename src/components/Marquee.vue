<script>
import imgLink1 from '@/assets/img/imglink1.png';
import imgLink2 from '@/assets/img/imglink2.png';
import imgLink3 from '@/assets/img/imglink3.png';
import imgLink4 from '@/assets/img/imglink4.png';
import imgLink5 from '@/assets/img/imglink1.png';

export default {

    data() {
        return {
            photos: [
                { img: imgLink1, link: 'https://1993gd.org/' },
                { img: imgLink2, link: 'https://www.facebook.com/CSCM.stella' },
                { img: imgLink3, link: 'https://www.facebook.com/stellasacredlove/' },
                { img: imgLink4, link: 'https://www.facebook.com/profile.php?id=100064306165198' },
                { img: imgLink5, link: 'https://www.facebook.com/woman1.center' },
                { img: imgLink1, link: 'https://1993gd.org/' },],

            isPaused: false,
        };
    },
    methods: {
        pauseAnimation() {
            this.isPaused = true;
        },
        resumeAnimation() {
            this.isPaused = false;
        },
    },
};
</script>

<template>

    <div class="max-w-[1400px] w-full">
        <!-- text-[#468097]  -->
        <div class="w-full flex items-end pt-[100px] text-white">
            <h1 class="w-[502px]  ">在自己熟悉的環境安心享受老年生活</h1>
            <h4>號外號外!老朋友專線</h4>
        </div>

        <div class=" h-[180px] overflow-hidden relative flex items-center " @mouseover="pauseAnimation"
            @mouseleave="resumeAnimation">

            <div class="absolute flex gap-6 w-[200%]"
                :class="{ 'animate-marquee': !isPaused, 'paused-marquee': isPaused }">


                <div v-for="(item, index) in photos" :key='index'
                    class="w-[240px] h-[120px] bg-white/90 rounded-[30px] backdrop-blur-[30px] flex items-center justify-center text-xl font-bold">
                    <a :href="item.link">
                        <img :src="item.img" alt="" class="w-full h-full object-cover rounded-[30px]" />
                    </a>
                </div>


                <div v-for="(item, index) in photos" :key='index'
                    class="w-[240px] h-[120px] bg-white/90 rounded-[30px] backdrop-blur-[30px] flex items-center justify-center text-xl font-bold">
                    <a :href="item.link">
                        <img :src="item.img" alt="" class="w-full h-full object-cover rounded-[30px]" />
                    </a>
                </div>


            </div>
        </div>
    </div>



</template>

<style>
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}

.paused-marquee {
    animation: marquee 30s linear infinite;
    animation-play-state: paused;
}
</style>
