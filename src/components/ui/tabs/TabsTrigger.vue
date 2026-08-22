<script setup lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { TabsTrigger } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsTrigger
    v-bind="delegatedProps"
    :class="cn('inline-flex min-h-14 items-center justify-center rounded-base border-2 border-border bg-background px-5 py-3 text-sm font-heading text-foreground outline-none transition-all motion-reduce:transition-none motion-reduce:data-[state=active]:translate-x-0 motion-reduce:data-[state=active]:translate-y-0 hover:bg-secondary-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:translate-x-boxShadowX data-[state=active]:translate-y-boxShadowY data-[state=active]:bg-main data-[state=active]:text-main-foreground data-[state=active]:shadow-none', props.class)"
  >
    <slot />
  </TabsTrigger>
</template>
