<template>
    <div class="c-calendar-week">

    </div>
</template>

<script>

export default {
    name: 'CalendarWeek',
    data () {
        return {
            storeData: store.state.data
        }
    },

    components: {
        CalendarDay
    }
}
</script>
