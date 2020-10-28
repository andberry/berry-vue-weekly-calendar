<template>
  <div id="app" class="min-h-screen md:flex md:flex-col text-white">

    <header id="header" class="md:flex-shrink-0 bg-twitter">
        <div class="container mx-auto text-center pt-6 pb-8 px-4">
            <h1 class="text-4xl text-white leading-none mt-2"><strong>Berry</strong><br>Weekly Calendar</h1>
        </div>
    </header>

    <main id="main" class="md:flex-grow bg-trello">
        <div class="container mx-auto py-16 px-4">
            <div class="cards grid grid-cols-7 gap-4 items-stretch">
                <div v-for="(item, key) in storeData" :key="key" class="">
                    <CalendarDay
                        :id="item.id"
                        :title="item.name"
                        :day=item
                    />
                </div>
            </div>
        </div>

        <CalendarEntry />
    </main>

    <footer id="footer" class="bg-twitter text-white text-xs py-3 fixed inset-x-0 bottom-0 md:flex-shrink-0">
        <div class="container mx-auto px-4">
            Yet another weekly calendar app, built with Vue.js
        </div>
    </footer>
  </div>
</template>

<script>
import { store } from './store.js'
import CalendarEntry from './components/calendar-entry.vue'
import CalendarDay from './components/calendar-day.vue'

export default {
    name: 'App',
    components: {
        CalendarEntry,
        CalendarDay
    },

    data () {
        return {
            storeData: store.state.data
        }
    }
}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base{
    body{
        @apply font-ubuntu;
    }
}

/*
svg{
    fill: theme('colors.airbnb');
}
*/
</style>
