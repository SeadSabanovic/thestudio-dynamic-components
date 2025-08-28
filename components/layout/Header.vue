<template>
  <header class="text-white">
    <div id="discount-banner" class="bg-[#2d2d2d]">
      <BaseContainer class="flex justify-between items-center text-xs h-9">
        <a
          href="https://github.com/SeadSabanovic/thestudio-dynamic-components"
          target="_blank"
          class="flex items-center gap-2 hover"
        >
          <nuxt-icon name="HugeiconsGithub" class="text-lg" filled />
          thestudio-dynamic-components
        </a>
        <a
          href="https://www.linkedin.com/in/ssabanovic/"
          target="_blank"
          class="flex items-center gap-2"
        >
          <nuxt-icon name="HugeiconsLinkedin" class="text-lg" filled />
          Sead Sabanovic
        </a>
      </BaseContainer>
    </div>
    <nav class="px-4 bg-gradient-to-r from-[#2d5d9f] to-[#708cb2]">
      <BaseContainer class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/icons/the-studio-logo.svg"
            alt="The Studio Logo"
            class="h-9"
          />
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="hover:text-gray-100 font-body transition-colors">
            Home
          </a>
          <a href="#" class="hover:text-gray-100 font-body transition-colors">
            Components
          </a>
          <a href="#" class="hover:text-gray-100 font-body transition-colors">
            About
          </a>
        </nav>
      </BaseContainer>
    </nav>
  </header>
</template>
