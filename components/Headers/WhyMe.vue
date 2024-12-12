<template>
  <div
    class="p-10 pb-20 mb-20 mt-40 items-start md:items-start gap-20 flex flex-col md:flex-col"
  >
    <div data-aos="fade-up">
      <h2 class="text-6xl mb-2 text-darkgreen">
        Waarom<br /><span class="font-semibold italic">werken met mij?</span>
      </h2>
    </div>

    <div data-aos="fade-up" class="grid w-full md:grid-cols-2 gap-20 lg:grid-cols-2 flex-grow">
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
          Elke samenwerking begint bij wie jij bent en wat je nodig hebt. Door goed naar je te luisteren, kan ik jouw visie omzetten in iets unieks en krachtigs.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'comments-dollar']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Duidelijkheid en flexibiliteit
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          We werken samen aan een aanpak die past bij jouw wensen en budget. Geen verrassingen onderweg, ik zorg voor eerlijke en heldere afspraken.
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="['fas', 'check']"
            class="text-2xl text-darkgreen"
          />
          <h4 class="text-2xl font-semibold text-darkgreen">
            Resultaten die tellen
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Mijn werk is meer dan mooi. Ik ben pas tevreden wanneer jij
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
            Altijd ondersteuning
          </h4>
        </div>
        <p class="text-darkgreen text-xl mt-2">
          Mijn werk stopt niet bij de oplevering. Ook daarna blijf ik beschikbaar voor vragen, updates en aanpassingen, zodat alles blijft werken zoals jij het wil.
        </p>
      </div>
    </div>
  </div>
</template>
