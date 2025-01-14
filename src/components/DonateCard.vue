<script>

export default {

    props: {
        link: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        src: {
            type: String,
            default: '',
        },
        tittle: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        starttime: {
            type: String,
            default: '',
        },
        endtime: {
            type: String,
            default: '',
        },

        progressbar: {
            type: String,
            default: '',
        },
        peoplemount: {
            type: String,
            default: '',
        },
        day: {
            type: String,
            default: '',
        },
    },
}

</script>
<!-- width: calc((100% - 72px) / 4); --><!-- truncate -->
<template>
    <router-link :to="{ name: link }"
        class="w-[calc((100%-100px)/3)] flex flex-col  gap-[10px] relative p-[20px] bg-[#DFDDC6] rounded-[30px]">


        <div class="p-[10px] z-[9] absolute bg-[#CFB858] text-white rounded-[18px]">{{ label }}</div>

        <div class=" h-[240px] bg-white/50 rounded-[30px] overflow-hidden relative">
            <img :src="src" alt=""
                class="h-[240px] w-full absolute rounded-[30px] transition-transform duration-700  hover:scale-110 ">
        </div>

        <div class="flex flex-col justify-between  gap-[10px]">
            <div class="flex flex-col  gap-[10px]">
                <h2 class="text-black">{{ tittle }}</h2>
                <h5 class="text-black mb-[8px] h-[48px] line-clamp-2">
                    {{ content }}
                </h5>
            </div>

            <div v-show="$route.name === 'NewView' || $route.name === 'DonateView' || $route.name === 'MainView'"
                class="flex flex-col gap-[6px] ">

                <div class="w-full flex justify-between">
                    <h5>{{ goal }}</h5>

                    <h5 class="w-full justify-end flex gap-2">
                        <div>{{ starttime }}</div>
                        <div v-if="!endtime == ''">~</div>
                        <div>{{ endtime }}</div>
                    </h5>
                </div>

                <div v-if="label == '募集'" class="h-[20px] rounded-[30px] bg-[#468097] relative">

                    <div class="absolute text-white px-2 -top-[2px] right-0 z-10">{{ progressbar }}</div>
                    <div :style="{ width: progressbar }" class="h-[20px] rounded-[30px] bg-[#CFB858] absolute">
                    </div>
                </div>

                <div class="flex justify-end gap-[10px]">
                    <div>{{ peoplemount }}</div>
                    <div>{{ day }}</div>
                </div>

            </div>
        </div>

    </router-link>
</template>