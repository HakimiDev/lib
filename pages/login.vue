<template>
    <div class="min-w-full min-h-screen bg-[#eee] p-3 pt-24 flex flex-col md:flex-row h-full w-full">
        <header class="text-2xl max-xs:text-xl flex justify-center flex-col gap-6 flex-1">
            <div class="tracking-widest">
                <h2 class="p-2">أنت حر ما دمت تقرأ ...</h2>
                <hr class="bg-gray-500 w-12 m-1">
            </div>
            <div class="text-base max-xs:text-sm bg-primary-100 text-gray-500 p-6 mx-2 sm:mx-16 rounded-lg shadow relative">
                <p class="leading-loose">
                    في نفس اللحظة التاريخية الَّتي سُحق فيها الوعي البشري بين صنمية الفكر الكنسي وعسف الملكية الإقطاعية. وفي
                    نفس اللحظة الَّتي استرقت فيها الأرواح، برق الفكر الإسلامي في سماء الظلام وأنارت مصنفات فحوله حقبة حاسمة
                    في تاريخ الفكر البشري ومسيرة الإنسانية بأسرها. ولم يكن النور الذي انبعث خلَّاقًا من بخارى حتّى الأندلس
                    انعكاسًا لسيلٍ جارف من الأفكار التقدمية، بقدر ما كان انعكاسًا للطريقة الَّتي تنتج بها هذه الأفكار
                    التقدمية.
                </p>
                <div
                    class="absolute top-[-1.8px] right-[-10px] ml-[-5px] border-l-[12px] border-r-[12px] border-transparent border-b-[12px] border-b-primary-100 -rotate-[45deg] rounded">
                </div>
            </div>
        </header>
        <main class="flex justify-center items-center text-sm max-xs:text-xs my-3 sm:my-11 sm:mx-10 flex-1 h-full w-full">
            <div class="bg-primary-100 w-full p-8 m-2 mt-5 rounded-lg shadow border-b-4 border-blue-500">
                <form class="flex flex-col gap-2">

                    <legend class="text-center text-2xl max-xs:text-lg font-bold">تسجيل الدخول</legend>

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
                    
                    <label class="pt-2">الأيميل <span class="text-red-500 text-base">*</span></label>
                    <input class="bg-gray-100 p-3 shadow rounded outline-none" type="email" placeholder="الأيميل" required>
                    <div>
                        <NuxtLink class="text-blue-500 p-1 transition duration-200 hover:underline" to="#">بستخدام اسم المستخدم</NuxtLink>
                    </div>

                    <label class="pt-2">كلمة المرور</label>
                    <input class="bg-gray-100 p-3 shadow rounded outline-none" type="password" placeholder="كلمة المرور" required>
                    <div>
                        <NuxtLink class="text-blue-500 p-1 transition duration-200 hover:underline" to="#">هل نسيت كلمة المرور؟</NuxtLink>
                    </div>

                    <div class="flex justify-center items-center">
                        <button class="bg-sky-700 mt-3 p-3 text-white rounded transition duration-200 hover:bg-sky-800 w-full sm:w-[75%]" type="submit">تسجيل الدخول</button>
                    </div>
                    
                    <div class="w-full flex justify-center items-center p-2">
                        <div class="h-[1px] w-9 bg-gray-300"></div>
                        <div class="px-4">
                            <h2>أو</h2>
                        </div>
                        <div class="h-[1px] w-9 bg-gray-300"></div>
                    </div>

                    <div class="text-center">
                        <h2>ليس لديك حساب؟ <NuxtLink class="text-blue-500 p-1 transition duration-200 hover:underline"
                                to="/register">انشاء حساب</NuxtLink>
                        </h2>
                    </div>

            </form>
        </div>
    </main>
</div></template>