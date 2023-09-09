<template>
    <NuxtLink class="cursor-pointer h-full w-full" :to="`/anime/${anime.mal_id}`">
        <li class="h-full w-full cursor-pointer transition duration-300 hover:scale-95">
            <header class="w-full h-[90%] relative">
                <img class="rounded-lg w-full h-full object-cover" :src="anime.images.jpg.large_image_url" alt="animeImg"
                    loading="lazy">
                <h5 class="absolute bottom-0 m-2 text-xs sm:text-lg bg-gray-700/80 text-orange-200 p-1 px-2 rounded-full">Episode: <span>{{
                    anime.episodes || '?' }}</span></h5>
            </header>
            <footer class="p-2">
                <div class="font-bold text-xs sm:text-lg text-center">
                    <h4 class=" max-w-full">{{ title }}</h4>
                </div>
            </footer>
        </li>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['anime']);
const title = computed(() => {
    return props.anime.title.substring(0, 13) + ((props.anime.title.length >= 13) ? '...' : '');
});
</script>

<style scoped>
/* .glow {
    text-shadow: 0 0 15px #fff, 0 0 25px #ff4da6, 0 0 35px #ff4da6, 0 0 45px #ff4da6, 0 0 55px #ff4da6, 0 0 65px #ff4da6, 0 0 75px #ff4da6;
} */
</style>