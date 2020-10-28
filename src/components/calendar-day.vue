<template>
    <div class="card rounded border border-twitter text-center h-full">
        <div class="card__title bg-twitter py-2 px-2 flex">
            <div class="rounded rounded-full bg-white text-twitter w-6 h-6 leading-none flex items-center justify-center text-white text-xs mr-2">
                {{ day.id }}
            </div>
            <div>
                {{ day.name }}
            </div>
        </div>
        <div class="card__body py-4 px-2">
            <div v-for="(ev, k) in day.events" :key="k" class="event mb-4 flex items-start">
                <div class="rounded rounded-full bg-skype w-6 h-6 leading-none flex items-center justify-center text-white text-xs mr-2 flex-shrink-0">
                    {{ ev.id }}
                </div>
                <div class="text-sm flex-grow text-left leading-tight">
                    {{ ev .desc }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarDay',
    props: ['day']
}
</script>
