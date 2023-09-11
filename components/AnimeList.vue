<template>
    <ul class="grid grid-cols-3 gap-5 px-3 place-items-center pt-20 absolute top-0 h-[98vh] overflow-y-auto overflow-x-hidden max-xs:grid-cols-2">
        <AnimeCard v-for="(anime, index) in list" :anime="anime" :key="index" />
        <Observer v-if="!isLoadMore" @intersect="loadMore" />
        <div class="text-primary-50">Loading</div>
    </ul>
    <div :class="isLoadMore ? 'bottom-0' : 'bottom-[-100%]'"
        class="flex justify-center items-center min-w-full p-4 transition-start duration-500 fixed bg-primary-50 rounded-t-lg">
        <div class="loader"></div>
    </div>
</template>

<script setup>
const url = 'https://api.jikan.moe/v4/top/anime';
const list = ref([]);
const isLoadMore = ref(false);
let page = 1;

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

onMounted(async () => {
    await nextTick();
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

    list.value = animeList.value.data;
});
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