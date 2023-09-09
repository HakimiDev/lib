<template>
    <div :class="showDrawer ? 'start-0' : 'start-[-150%]'"
        class="w-full h-screen fixed top-0 z-20 bg-black/50 transform transition-start duration-500"
        @click.self="toggleDrawer">
        <div :class="showDrawer ? 'start-0' : 'start-[-150%]'" class="h-full w-[80%] bg-primary-50 flex flex-col p-4">
            <header class="text-xl font-bold uppercase flex justify-between items-center pb-2 border-b-2">
                <h2>Hakimi</h2>
                <div @click="toggleDrawer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </header>
            <main class="p-2">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['showDrawer', 'toggleDrawer']);
</script>
