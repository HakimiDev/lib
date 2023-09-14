<template>
    <ul class="grid grid-cols-3 gap-5 px-3 place-items-center overflow-x-hidden max-xs:grid-cols-2">
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
import { list, page, _lastScroll, lastScroll } from "../js/animeStore";

const url = 'https://api.jikan.moe/v4/top/anime';
const isLoadMore = ref(false);

const loadMore = async () => {
    try {
        if (isLoadMore.value) return;
        isLoadMore.value = true;
        page.value++;
        const { data: animeList } = await useFetch(url, {
            params: {
                page: page.value,
                limit: 24,
                order_by: 'rank',
                type: 'tv'
            },
            key: page.value.toString(),
            lazy: true
        });

        if (animeList.value.data) list.value.push(...animeList.value.data);

        setTimeout(() => {
            isLoadMore.value = false;
        }, 350);
    } catch {
        setTimeout(() => {
            isLoadMore.value = false;
        }, 350);
    }

};

onMounted(async () => {
    window.onscroll = () => {
        _lastScroll.value = window.pageYOffset;
    };

    await nextTick();
    const { data: animeList } = await useFetch(url, {
        params: {
            page: page.value,
            limit: 24,
            order_by: 'rank',
            type: 'tv'
        },
        key: page.value.toString(),
        lazy: true
    });

    if (!list.value.length) list.value = animeList.value.data;
    else {
        // location.hash = "#" + lastClickedAnime.value;
        window.scrollTo({
            top: lastScroll.value
        });
    }
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