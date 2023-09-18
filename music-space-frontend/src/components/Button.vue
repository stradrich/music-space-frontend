<script setup>
const props = defineProps({
    text: {
        type: String
    }
})

const emits = defineEmits(["click"])
</script>

<template>
    <v-btn variant="outlined" @click="$emit('click')">{{ text }}</v-btn>
</template>