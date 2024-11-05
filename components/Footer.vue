<template>
    <div class="relative ">
        <NuxtLink to="/contact">
        <div class="absolute group cursor-pointer p-6 md:p-10 ml-10 mr-10 text-lightgreen -top-72 md:-top-40 left-0 md:left-10 md:w-1/2 h-96 md:h-80 bg-maingreen">
            <h3 class="text-2xl md:text-4xl font-semibold italic mb-4 md:mb-5">
                Start vandaag met jouw merkverhaal!
            </h3>
            <p class="lg:w-full text-lg md:text-xl md:w-2/3">
                Of je nu vragen hebt of een samenwerking wilt starten, ik sta voor je klaar om jouw merk krachtig neer te zetten.
            </p>
            <div class="absolute -bottom-5 right-4 md:top-[76px] md:-right-40 w-32 md:w-60 transform transition-all duration-500 ease-out group-hover:translate-x-4">
                <img src="../public/assets/images/linkto-big.svg" alt="">
            </div>
        </div>
        </NuxtLink>
        <div class="flex flex-col-reverse lg:flex-row bg-middlegreen justify-between pt-40 md:pt-52 p-6 md:p-10">
            <div class="mt-10 lg:mt-0">
                <div class="flex gap-2 mt-5 mb-10 md:mb-20">
                    <NuxtLink to=""><img src="../public/assets/images/instagram.svg" alt=""></NuxtLink>
                    <NuxtLink to=""><img src="../public/assets/images/facebook.svg" alt=""></NuxtLink>
                    <NuxtLink to=""><img src="../public/assets/images/linkedin.svg" alt=""></NuxtLink>
                </div>
                <div class="text-darkgreen text-sm md:text-base">
                    <p>Teynur Yuseinov</p>
                    <p><span class="font-semibold">©CereusCreative •</span> <NuxtLink to="">Privacy Policy</NuxtLink></p>
                </div>
            </div>
            <div class="flex text-lg md:text-xl flex-col text-darkgreen leading-loose font-bold">
                <NuxtLink to="/about">Over</NuxtLink>
                <NuxtLink to="/worktoegether">Samenwerking</NuxtLink>
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>
        </div>
    </div>
</template>
