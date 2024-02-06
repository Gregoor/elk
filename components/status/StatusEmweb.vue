<script setup lang="ts">
import { onWindowMessage } from '@emweb/host'
import { reactive } from 'vue'

const { src } = defineProps<{
  src: string
  props?: Record<string, any>
}>()

const size = reactive({ width: '100%', height: '100%' })

onWindowMessage(src, {
  onResize: (width, height) => {
    size.width = `${width}px`
    size.height = `${height}px`
  },
})
</script>

<template>
  <iframe
    :src="src"
    :style="{ border: 0, ...size }"
    v-bind="props"
  />
</template>
