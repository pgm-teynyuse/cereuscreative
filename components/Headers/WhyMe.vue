<template>
  <div
    class="p-10 pb-40 mb-40 mt-40 items-start md:items-start gap-32 flex flex-col md:flex-col"
  >
    <div class="">
      <h2 class="text-6xl mb-5 text-darkgreen">
        Waarom<br /><span class="font-semibold italic">kiezen voor mij?</span>
      </h2>
    </div>

    <div class="grid w-full md:grid-cols-2 gap-20 lg:grid-cols-2 flex-grow">
      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'ear-listen']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Luisteren naar jouw visie
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Elke samenwerking begint bij jouw verhaal. Door naar je te luisteren,
          begrijp ik precies wat je zoekt, zodat ik het kan vertalen naar iets
          unieks en krachtigs.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'comments-dollar']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Transparantie en flexibiliteit
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Samen kijken we naar een aanpak die past bij jouw budget en wensen.
          Verwacht geen verrassingen—ik zorg voor een eerlijke en heldere
          communicatie.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'check']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Kwaliteit die resultaten levert
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Mijn werk is meer dan mooi; het werkt. Ik ben pas tevreden wanneer jij
          het resultaat ziet dat je zoekt.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'handshake-angle']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Ondersteuning en partnerschap
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Een project eindigt niet bij de oplevering. Ik sta ook na de lancering
          voor je klaar voor eventuele updates of aanpassingen.
        </p>
      </div>
    </div>
  </div>
</template>
