<template>

    <nav
        class=" w-full max-w-[1920px] px-[40px] py-[16px]  fixed top-0 z-20 flex justify-between items-center bg-[#457f96]/90 backdrop-blur-[10px] text-white">

        <router-link to="/">
            <img class="h-[35px]" src="../assets/img/nav-logo.png" alt="">
        </router-link>

        <ul class="mt-2 flex items-center">

            <li class="px-[20px] relative group">

                <div class="border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                    <img src="../assets/img/lamp.png" alt=""
                        class="absolute -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <h3 class=" cursor-pointer ">關於我們</h3>
                </div>

                <ul
                    class="w-[120px] py-[30px] rounded-[30px] flex flex-col justify-center items-center gap-5 absolute top-[150%] left-0 bg-[#457f96] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            組織介紹</li>
                    </router-link>
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            組織聯絡</li>
                    </router-link>
                    <router-link to="">
                        <li
                            class=" text-white cursor-pointer border-b-[2px]  border-transparent hover:border-[#DFDCC6]">
                            公開資料</li>
                    </router-link>
                </ul>

            </li>


            <li class="px-[20px] relative group">
                <router-link to="/NewView">
                    <div class="border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                        <img src="../assets/img/lamp.png" alt=""
                            class="absolute -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <h3 class=" cursor-pointer ">最新消息</h3>
                    </div>
                </router-link>
            </li>

            <li class="px-[20px] relative group">
                <router-link to="/ServiceView">
                    <div class="border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                        <img src="../assets/img/lamp.png" alt=""
                            class="absolute -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <h3 class=" cursor-pointer ">服務項目</h3>
                    </div>
                </router-link>
                <!-- <ul
                    class="w-[120px] py-[30px] rounded-[30px] flex flex-col justify-center items-center gap-5 absolute top-[150%] left-0 bg-[#457f96] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            社區教育</li>
                    </router-link>
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            關懷照護</li>
                    </router-link>
                    <router-link to="">
                        <li
                            class=" text-white cursor-pointer border-b-[2px]  border-transparent hover:border-[#DFDCC6]">
                            女性成長</li>
                    </router-link>
                    <router-link to="">
                        <li class="text-white cursor-pointer border-b-[2px]  border-transparent hover:border-[#DFDCC6]">
                            心靈冥想</li>
                    </router-link>
                </ul> -->

            </li>

            <li class="px-[20px] relative group">

                <div class="border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                    <img src="../assets/img/lamp.png" alt=""
                        class="absolute -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <h3 class=" cursor-pointer ">參與曉明</h3>
                </div>

                <ul
                    class="w-[120px] py-[30px] rounded-[30px] flex flex-col justify-center items-center gap-5 absolute top-[150%] left-0 bg-[#457f96] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            志工業務</li>
                    </router-link>
                    <router-link to="">
                        <li class=" text-white cursor-pointer border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                            實習業務</li>
                    </router-link>
                    <router-link to="">
                        <li
                            class=" text-white cursor-pointer border-b-[2px]  border-transparent hover:border-[#DFDCC6]">
                            參訪申請</li>
                    </router-link>

                </ul>

            </li>


            <li class="px-[20px] relative group">
                <router-link to="">
                    <div class="border-b-[2px] border-transparent hover:border-[#DFDCC6]">
                        <img src="../assets/img/lamp.png" alt=""
                            class="absolute -top-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <h3 class=" cursor-pointer">連絡我們</h3>
                    </div>
                </router-link>
            </li>

        </ul>

        <router-link to="/DonateView">
            <div
                class="px-4 py-2  bg-[#CFB858]  rounded-[32px] bg-[url('../assets/img/monochrome.png')] animate-moveBackground">
                <h4>捐款支持</h4>
            </div>
        </router-link>

        <ul>
            <!-- <li class="">關於我們</li>
            <li class="">最新消息</li>
            <li class="">服務項目</li>
            <li class="">參與曉明</li>
            <li class="">聯絡我們</li>
            <li class="">捐款支持</li> -->
        </ul>
    </nav>

</template>

<!-- 1000 -->