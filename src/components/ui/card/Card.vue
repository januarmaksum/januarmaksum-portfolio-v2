<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn('rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow', props.class)"
  >
    <slot />
  </div>
</template>
