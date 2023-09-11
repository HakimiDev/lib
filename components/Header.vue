<template>
    <header class="min-w-full sticky top-0 z-10 flex justify-center bg-transparent p-3">
        <Layout class="w-full sm:w-[70%] flex justify-between items-center p-4 rounded-lg uppercase">
            <div v-if="path == '/anime'" class="flex gap-2">
                <div class="cursor-pointer transform transition duration-500 hover:bg-gray-700 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
                <div class="cursor-pointer transform transition duration-500 hover:bg-gray-700 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
            <div class="text-xl font-bold">
                <NuxtLink to="#">
                    <h2>Dati<span class="text-orange-500">Baio</span></h2>
                </NuxtLink>
            </div>
            <nav>
                <div class="cursor-pointer transform transition duration-500 hover:bg-gray-700 rounded-full p-1 hover:rotate-[360deg]" @click="toggleDrawer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </Layout>
    </header>
    <Drawer :showDrawer="showDrawer" :toggleDrawer="toggleDrawer">
        <ul class="flex flex-col gap-8">
            <li>Test</li>
        </ul>
    </Drawer>
</template>

<style scoped>
.active {
    border-bottom: 2px solid rgb(0, 123, 255);
}
</style>

<script setup>
const showDrawer = ref(false);
const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
};

const path = computed(() => {
    return useRoute().path;
});

</script>