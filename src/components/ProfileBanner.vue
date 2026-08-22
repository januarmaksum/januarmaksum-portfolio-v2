<script setup lang="ts">
import { Image } from '@lucide/vue'

interface Props {
  src?: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  src: undefined,
  alt: 'Portfolio banner',
})
</script>

<template>
  <div
    class="relative grid aspect-video min-h-44 place-items-center overflow-hidden border-b-2 border-border bg-background min-[761px]:aspect-[5/2] min-[761px]:min-h-[220px]"
  >
    <img v-if="src" :src="src" :alt="alt" class="size-full object-cover" />
    <div
      v-else
      class="relative flex size-full items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,var(--background)_0,var(--background)_18px,var(--secondary-background)_18px,var(--secondary-background)_36px)] text-foreground"
      role="img"
      aria-label="Banner placeholder"
    >
      <span
        class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-foreground/15"
        aria-hidden="true"
      />
      <span
        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-foreground/15"
        aria-hidden="true"
      />
      <span
        class="relative flex items-center gap-2.5 text-[clamp(0.8rem,1.5vw,1rem)] font-heading tracking-[0.12em] uppercase"
      >
        <Image class="size-[1.3rem]" aria-hidden="true" />
        <span>Banner placeholder</span>
      </span>
    </div>
  </div>
</template>
