<template>
    <div class="flex flex-col gap-5 p-8 overflow-y-auto h-[93vh]">
        <div class="p-4">
            <NuxtLink to="/anime">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </NuxtLink>
        </div>
        <h2>Name: {{ anime.data.title }}</h2>
        <h2>ID: {{ anime.data.mal_id }}</h2>
        <img class="max-w-[300px]" :src="anime.data.images.jpg.image_url" alt="animeimg" loading="lazy">
        <p>{{ anime.data.synopsis.replace('[Written by MAL Rewrite]', '') }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://api.jikan.moe/v4/anime/" + id;

const { data: anime } = await useFetch(url, { key: id });

</script>
