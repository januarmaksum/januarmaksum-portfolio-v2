<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props {
  src?: string
  alt?: string
  fallback?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  alt: 'Avatar',
  fallback: 'JM',
})
</script>

<template>
  <AvatarRoot
    :class="cn('relative flex size-[148px] shrink-0 overflow-hidden rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow', props.class)"
    :aria-label="alt"
  >
    <AvatarImage v-if="src" :src="src" :alt="alt" class="size-full object-cover" />
    <AvatarFallback
      class="flex size-full items-center justify-center text-4xl font-heading tracking-[-0.06em]"
    >
      {{ fallback }}
    </AvatarFallback>
  </AvatarRoot>
</template>
