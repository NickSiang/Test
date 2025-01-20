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



<template>

    <section class="w-full flex gap-3 flex-col justify-center items-center">
        <p>{{ data.skill }}</p>
        <div :style="{
            background: `conic-gradient(#4caf50 ${data.percent * 3.6}deg, #e0e0e0 0deg)`,
        }"
            class="w-[80px] h-[80px] relative border rounded-[50%]">

            <div
                class="w-[58px] h-[58px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[white] border rounded-[50%] ">

            </div>
        </div>

    </section>

</template>
