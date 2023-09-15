<template>
    <div>
        <section
            class="w-full bg-[url(https://foulabook.com/yandex/2.jpg)] bg-scroll bg-cover bg-center bg-no-repeat h-[40vh] border-b-2 border-black">
            <div
                class="w-full h-full flex items-center bg-black/20 text-white p-2 text-2xl max-xs:text-lg leading-loose justify-center flex-col">
                <h2>الفضول أحد الخصائص الدائمة والأكيدة للعقل النشيط.</h2>
                <div class="p-3 pt-8 text-sm w-full sm:w-[70%]">
                    <div class="flex bg-white text-black items-center overflow-hidden rounded">
                        <input class="w-full h-full outline-none p-3" type="text" placeholder="إبحث عن كتاب او مؤلف">
                        <div class="bg-sky-600 h-full p-3 cursor-pointer transition duration-300 hover:bg-sky-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="p-3">
            <header class="w-full text-gray-500">
                <div class="w-full flex justify-center items-center p-2">
                    <div class="h-[1px] w-9 bg-gray-300"></div>
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div class="h-[1px] w-9 bg-gray-300"></div>
                </div>
            </header>
            <main class="p-1 pt-5 text-lg sm:px-24">
                <p class=" leading-loose text-center text-primary-200">
                    لا أحب الكتب لأنني زاهد في الحياة .. ولكنني أحب الكتب لأن حياة واحدة لا تكفيني.. ومهما يأكل الانسان فإنه
                    لن يأكل بأكثر من معدة واحدة، ومهما يلبس فإنه لن يلبس على غير جسد واحد، ومهما يتنقل في البلاد فإنه لن
                    يستطيع أن يحل في مكانين. ولكنه بزاد الفكر والشعور والخيال يستطيع أن يجمع الحيوات في عمر واحد، ويستطيع أن
                    يضاعف فكره وشعوره وخياله كما يتضاعف الشعور بالحب المتبادل، وتتضاعف الصورة بين مرآتين.
                </p>
            </main>
            <footer class="w-full pt-6 text-gray-500">
                <div class="w-full flex justify-center items-center p-2">
                    <div class="h-[1px] w-9 bg-gray-300"></div>
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div class="h-[1px] w-9 bg-gray-300"></div>
                </div>
            </footer>
        </section>
        <section class="p-2">
            <div>
                <header class="relative text-xl">
                    <h4 class="w-fit border-b-2 px-1 border-blue-500">الكتب الاكثر تحميلا</h4>
                    <div class="h-[2px] w-full border-b-2 absolute bottom-0 -z-10"></div>
                </header>
                <main>
                    <BookList />
                    <div class="w-full flex justify-center items-center p-2">
                        <div class="h-[1px] w-9 bg-gray-300"></div>
                        <div class="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                        <div class="h-[1px] w-9 bg-gray-300"></div>
                    </div>
                </main>
            </div>
        </section>
    </div>
</template>
