<script>
export default {
    props: {
        linkName: {
            type: String,
            default: '',
        },
    },
};
</script>

<template>
   
        <router-link :to="{ name: linkName }">
            <div
                :class="['w-[162px] h-[80px] flex justify-center items-center border-[3px] rounded-[32px] hover:bg-[#CFB858]']">
                <h2 class="text-white">
                    <slot></slot>
                </h2>
            </div>
        </router-link>
 
</template>
