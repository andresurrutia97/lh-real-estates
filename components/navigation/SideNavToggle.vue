<template>
  <div
    class="flex flex-col justify-between h-2/5 w-10 pointer md:hidden"
    role="button"
    @click="$emit('toggle')"
  >
    <div v-for="n in 2" :key="n" class="w-6 h-0.5 bg-lh-green-gray"></div>
    <div class="w-4 h-0.5 bg-lh-green-gray"></div>
  </div>
</template>
4
