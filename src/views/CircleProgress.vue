<script>
export default {
    data() {
        return {
            progress: 30,
            startdeg: 0,
            outsideSpacing: 360,
            insideSpacing: 240,
            outsideColor: '#4caf60',
            insideColor: '#ffffff',
            minValue: 0,
            maxValue: 100,
            Open: true,
        };
    },
    computed: {
        computedProgress() {
            const range = this.maxValue - this.minValue;
            return ((this.progress - this.minValue) / range) * 100;
        },
    },
    watch: {
        progress(value) {
            if (value < this.minValue) {
                this.progress = this.minValue;
            } else if (value > this.maxValue) {
                this.progress = this.maxValue;
            }
        },
    },
    methods: {
        calculateProgress(event) {
            const rect = this.$refs.progressBar.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            angle = (angle + 720 + 90 - this.startdeg * 3.6) % 360;

            const range = this.maxValue - this.minValue;
            this.progress = Math.round((angle / 360) * range + this.minValue);

            if (this.progress < this.minValue) this.progress = this.minValue;
            if (this.progress > this.maxValue) this.progress = this.maxValue;
        },

        startDrag(event) {
            this.isDragging = true;
            this.calculateProgress(event);
        },

        stopDrag() {
            this.isDragging = false;
        },


        onDrag(event) {
            if (this.isDragging) {
                this.calculateProgress(event);
            }
        },

        toggleOpen() {
            this.Open = !this.Open;
        },
    },


}

</script>



<template>

    <main
        class="w-full max-w-[1400px] m-auto px-[20px] py-40 relative flex flex-col-reverse gap-y-[50px] gap-x-[200px] justify-center items-center xl:flex-row xl:h-screen">

        <section class=" flex justify-center  xl:w-1/2">
            <div ref="progressBar" :style="{
                background: `conic-gradient(${outsideColor} ${computedProgress * 3.6}deg, #e0e0e0 0deg)`,
                transform: `rotate(${startdeg * 3.6}deg)`,
                width: `${outsideSpacing}px`,
                height: `${outsideSpacing}px`,
            }" class=" relative border rounded-[50%] " @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag"
                @mouseleave="stopDrag">

                <div :style="{
                    background: `${insideColor}`,
                    width: `${insideSpacing}px`,
                    height: `${insideSpacing}px`,
                }"
                    class="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border rounded-[50%] ">
                    <span :style="{
                        transform: ` rotate(${startdeg * (-3.6)}deg)`
                    }" class=" text-[60px] font-bold">{{
                        progress }}</span>
                </div>
            </div>

        </section>
        <section class="flex flex-col gap-[20px] xl:w-1/3">
            <div class="w-[80px] bg-[#ffffff] p-2 border text-[50px] rounded-[30px] absolute top-10 left-1/2 -translate-x-1/2 cursor-pointer block sm:hidden "  @click="toggleOpen">
                <img src="../assets/img/ham.jpg" alt="">
            </div>
            <h1 class="text-[40px] bg-b" >Progress Control</h1>

            <div v-show="Open"
                class="w-full px-10 py-8 absolute top-[5%] left-[0] flex flex-col gap-5 bg-white sm:w-fit sm:p-0 sm:relative sm:flex sm:flex-col sm:gap-[20px] ">
                <div class="text-[60px] text-center mb-5 cursor-pointer block sm:hidden" @click="toggleOpen">↩</div>

                <div class=" flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="progress" class="font-bold">Progress:</label>
                    <input id="progress" type="range" name="progress" v-model.number="progress" :min="minValue"
                        :max="maxValue">
                </div>
                <div class=" flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="Outside" class="font-bold">Outside Color:</label>
                    <div>
                        <input id="Outside" type="color" name="Outside" v-model="outsideColor">
                    </div>
                </div>
                <div class=" flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="Inside" class="font-bold">Inside Color:</label>
                    <div>
                        <input id="Inside" type="color" name="Inside" v-model="insideColor">
                    </div>
                </div>
                <div class="flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="OutsideSpacing" class="font-bold">Outside Spacing:</label>
                    <input type="range" name="" id="OutsideSpacing" v-model.number="outsideSpacing" max="360"
                        :min="insideSpacing + 50">
                </div>
                <div class="flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="InsideSpacing" class="font-bold">Inside Spacing:</label>
                    <input type="range" name="" id="InsideSpacing" v-model.number="insideSpacing"
                        :max="outsideSpacing - 50" min="0">
                </div>
                <div class="flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="StartPlace" class="font-bold">Start Place:</label>
                    <input type="range" name="" id="StartPlace" v-model.number="startdeg"
                        class="border-[gray] border-[2px]" min="0" max="100">
                </div>

                <div class="flex gap-x-5  text-[20px] flex-col sm:flex-row">
                    <label for="minValue" class="font-bold">Min Value:</label>
                    <input type="range" id="minValue" v-model.number="minValue" min="0" :max="maxValue - 1" />
                </div>

                <div class="flex gap-x-5 text-[20px] flex-col sm:flex-row">
                    <label for="maxValue" class="font-bold">Max Value:</label>
                    <input type="range" id="maxValue" v-model.number="maxValue" :min="minValue + 1" max="100" />
                </div>
            </div>
        </section>

    </main>

</template>
