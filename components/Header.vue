<template>
    <header class="min-w-full top-0 z-20 sticky">
        <Layout class="w-full">
            <div class="w-full h-10 text-xs">
                <div class="w-full h-full flex gap-1 justify-between items-center px-3 max-xs:px-1 sm:px-48 border-b-2">
                    <div class="h-full flex gap-1">
                        <button
                            class="border-x-[1px] px-2 p-1 flex items-center h-full cursor-pointer transition duration-300 hover:text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 fill-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span>مهمتنا</span>
                        </button>
                        <button
                            class="border-e-[1px] px-2 p-1 flex items-center gap-1 cursor-pointer transition duration-300 hover:text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <span>بحث متقدم</span>
                        </button>
                    </div>

                    <div class="h-full flex items-center border-x-[1px]">
                        <div
                            class="h-full p-2 flex-1 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-sky-500 fill-gray-600 hover:fill-white">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                                <path
                                    d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z">
                                </path>
                            </svg>
                        </div>
                        <div
                            class="h-full p-2 flex-1 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-sky-800 fill-gray-600 hover:fill-white">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                                <path
                                    d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ------- -->
            <div class="flex justify-between items-center p-6 sm:px-48 rounded-b-lg shadow-lg">
                <div>
                    <NuxtLink to="/" class="cursor-pointer">
                        <h2>
                            <img class="w-36" alt="FoulaBook-فولة بوك!" src="https://foulabook.com/asset_ar/img/logo.png"
                                data-logo-height="35" loading="lazy">
                        </h2>
                    </NuxtLink>
                </div>
                <nav class="flex items-center">
                    <div @click="toggleMinMenu"
                        class="bg-slate-700 flex-1 text-white p-2 rounded cursor-pointer lg:hidden transition duration-200 hover:bg-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    <ul class="hidden lg:flex gap-4 text-sm flex-1">
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink to="/">الرئيسية</NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink>الكتب</NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink>المؤلفون</NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink class="flex gap-2 items-center">
                                <span>المزيد</span>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink to="/login" class="flex gap-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-500">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                    </svg>
                                </div>
                                <span>دخول</span>
                            </NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink to="/register" class="flex gap-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                <span>حساب جديد</span>
                            </NuxtLink>
                        </li>
                        <li class="cursor-pointer text-slate-800 font-bold p-1 transition duration-200 hover:text-blue-500">
                            <NuxtLink>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Layout>
    </header>
    <MinMenu :show="minMenuShow" :toggle="toggleMinMenu" />
</template>

<script setup>
const minMenuShow = ref(false);
const toggleMinMenu = () => minMenuShow.value = !minMenuShow.value;
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(59 130 246);
}
</style>