<template>
    <ul class="grid grid-cols-3 gap-5 px-3 place-items-center p-1 py-2 h-[90vh] overflow-y-auto">
        <AnimeCard v-for="(anime, index) in list" :anime="anime" :key="index" />
        <Observer v-if="!isLoadMore" @intersect="loadMore" />
    </ul>
    <div :class="isLoadMore ? 'bottom-0' : 'bottom-[-100%]'"
        class="flex justify-center items-center min-w-full p-1 transition-start duration-1000 fixed bottom-0 bg-primary-50">
        <div class="loader"></div>
    </div>
</template>

<script setup>
const { $AOS } = useNuxtApp();

let page = 1;
const url = 'https://api.jikan.moe/v4/top/anime'

const list = ref([]);

const { data: animeList } = await useFetch(url, {
    params: {
        page,
        limit: 24,
        order_by: 'rank',
        type: 'tv'
    },
    key: page.toString(),
    lazy: true
});

list.value = animeList._rawValue.data;

const isLoadMore = ref(false);
const loadMore = async () => {
    if (isLoadMore.value) return;
    isLoadMore.value = true;
    page++;
    const { data: animeList } = await useFetch(url, {
        params: {
            page,
            limit: 24,
            order_by: 'rank',
            type: 'tv'
        },
        key: page.toString(),
        lazy: true
    });
    list.value.push(...animeList._rawValue.data);

    setTimeout(() => {
        isLoadMore.value = false;
    }, 350);
};
</script>

<style scoped>
.loader {
    border: 3px solid #f3f3f3;
    /* Light grey */
    border-top: 3px solid #15373b;
    /* Blue */
    border-radius: 50%;
    width: 27px;
    height: 27px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>