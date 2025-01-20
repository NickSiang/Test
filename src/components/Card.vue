<script>

export default {

    props: {
        data: {
            type: Object,
            default: '',
        },
    },
}

</script>
<!-- w-[calc((100%)/3)] -->
<template>
    <router-link :to="{ name: data.link }"
        class="w-[380px] p-5 flex flex-col gap-5 relative backdrop-blur-[20px] rounded-[30px] shadow-custom-inset  bg-[white]/20 group transition-transform duration-500 hover:scale-90">


        <!-- <div class="p-[10px] z-[9] absolute  text-white rounded-[18px]">{{ data.label }}</div> -->

        <section class="h-[240px] rounded-[10px]  overflow-hidden relative">
            <img :src="data.src" alt=""
                class="w-full h-[240px]  object-cover rounded-[10px] transition-transform duration-500  group-hover:scale-110 ">
        </section>



        <section class="w-full flex gap-2 justify-between">

            <div class="w-full flex gap-[10px] ">
                <div class="w-full bg-gradient-to-t  from-stone-200/40 to-white/80 p-[1px] rounded-[16px]">
                    <div class="w-full h-full bg-gradient-to-b  from-stone-200/80 to-white/80 p-[4px] rounded-[16px]">
                        <h3 class=" text-black">{{ data.tittle }}</h3>
                        <p class="text-black mb-[px]  line-clamp-2">
                            {{ data.text }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end ">

                <div class="flex flex-col justify-center items-center">

                    <div class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
                        <button
                            class="h-[32px] group p-[4px] rounded-[8px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                            <div class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[6px] px-2 py-3">
                            </div>
                        </button>
                    </div>

                    <div class="flex items-center">
                        <div class=" bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
                            <button
                                class="w-[32px] group p-[4px] rounded-[8px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                                <div class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[6px] px-3 py-2">
                                </div>
                            </button>
                        </div>

                        <div class=" bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[80px]">
                            <button
                                class="w-[40px] h-[40px] group p-[4px] rounded-[80px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                                <div
                                    class="w-[30px] h-[30px] m-auto bg-gradient-to-b  from-stone-200/40 to-white/80 rounded-[80px] ">
                                </div>
                            </button>
                        </div>

                        <div class=" bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
                            <button
                                class="w-[32px] group p-[4px] rounded-[8px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                                <div class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[6px] px-3 py-2">
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
                        <button
                            class="h-[32px] group p-[4px] rounded-[8px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                            <div class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[6px] px-2 py-3">
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </section>

    </router-link>
</template>