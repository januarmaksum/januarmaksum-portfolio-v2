<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <span
    :class="cn('inline-flex min-h-10 items-center rounded-base border-2 border-border bg-main px-4 py-2 text-sm font-heading text-main-foreground shadow-shadow', props.class)"
  >
    <slot />
  </span>
</template>
