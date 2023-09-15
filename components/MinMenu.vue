<template>
    <Transition>
        <div v-show="show" class="fixed top-[7.4rem] z-10 min-w-full bg-[#333] border-b-[1px] border-yellow-200 rounded-b">
            <div class="text-white text-sm p-2">
                <ul class="flex flex-col gap-4">
                    <NuxtLink
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500"
                        to="/">الرئيسية</NuxtLink>

                    <NuxtLink
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500">
                        الكتب</NuxtLink>

                    <NuxtLink
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500">
                        المؤلفون</NuxtLink>

                    <NuxtLink
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500 flex justify-between items-center">
                        <div class="flex gap-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 text-blue-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span>المزيد</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/login"
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500 flex gap-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </div>
                        <span>دخول</span>
                    </NuxtLink>

                    <NuxtLink to="/register"
                        class="cursor-pointer p-3 border-b-[1px] border-[#666] font-bold transition duration-200 hover:text-blue-500 flex gap-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <span>حساب جديد</span>
                    </NuxtLink>

                </ul>
            </div>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['show', 'toggle']);

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: 0.6s ease-in-out;
    opacity: 1;
    /* z-index: -1000; */
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-100%);
    transition: 0.5s ease-in-out;
    opacity: 0;
    /* z-index: -1000; */
}
</style>