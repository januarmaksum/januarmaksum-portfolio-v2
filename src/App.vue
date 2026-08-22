<script setup lang="ts">
import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Mail,
  MapPin,
  Moon,
  Sun,
  UserRound,
} from '@lucide/vue'
import { ref } from 'vue'
import ProfileBanner from '@/components/ProfileBanner.vue'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Theme = 'light' | 'dark'
type TabId = 'experience' | 'about' | 'portfolio' | 'contact' | 'skills'

interface SocialItem {
  label: string
  href?: string
}

interface PortfolioTab {
  id: TabId
  label: string
}

const themeStorageKey = 'portfolio-theme'
const rootElement = document.documentElement
const currentTheme = ref<Theme>(rootElement.classList.contains('dark') ? 'dark' : 'light')

const tabs: PortfolioTab[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
  { id: 'skills', label: 'Skills' },
]

const socialItems: SocialItem[] = [
  { label: 'LinkedIn' },
  { label: 'GitHub' },
]

const skills = ['React', 'Vue', 'TypeScript', 'Node.js']

const panelCardClass =
  'grid min-h-[260px] grid-cols-1 items-start gap-[clamp(1rem,2.5vw,1.75rem)] p-[clamp(1.3rem,3vw,2.5rem)] min-[421px]:grid-cols-[auto_minmax(0,1fr)] min-[761px]:min-h-[230px]'
const panelIconClass =
  'grid size-[clamp(3.25rem,7vw,4.5rem)] shrink-0 place-items-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow [&_svg]:size-[52%] [&_svg]:stroke-[2.25]'
const panelKickerClass =
  'mb-[0.45rem] text-xs font-heading tracking-[0.13em] text-foreground/70 uppercase'
const panelHeadingClass =
  'max-w-[920px] text-[clamp(1.55rem,3.3vw,2.5rem)] leading-[1.05] tracking-[-0.035em]'
const panelBodyClass =
  'mt-[0.85rem] max-w-[720px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.65] text-foreground/70'

function applyTheme(theme: Theme) {
  currentTheme.value = theme
  rootElement.classList.toggle('dark', theme === 'dark')
  rootElement.style.colorScheme = theme

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  themeColor?.setAttribute(
    'content',
    theme === 'dark' ? 'oklch(29.28% 0.0373 94.38)' : 'oklch(96.79% 0.0654 102.26)',
  )

  try {
    window.localStorage.setItem(themeStorageKey, theme)
  } catch {
    // The selected theme still applies when browser storage is unavailable.
  }
}

function toggleTheme() {
  applyTheme(currentTheme.value === 'light' ? 'dark' : 'light')
}
</script>

<template>
  <div
    class="min-h-screen min-w-80 overflow-x-hidden bg-background bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_16%,transparent)_1.5px,transparent_1.5px)] bg-[position:0_0] bg-[size:22px_22px] p-[clamp(1rem,4vw,3rem)] text-foreground transition-colors motion-reduce:transition-none max-[760px]:p-4"
  >
    <main class="mx-auto w-full max-w-[1440px]">
      <Card class="overflow-visible">
        <section class="overflow-hidden rounded-base" aria-labelledby="profile-title">
          <div class="relative">
            <ProfileBanner />

            <Button
              class="absolute top-[clamp(0.85rem,2vw,1.5rem)] right-[clamp(0.85rem,2vw,1.5rem)] z-[2] size-12"
              size="icon"
              variant="neutral"
              type="button"
              :aria-label="currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
              :aria-pressed="currentTheme === 'dark'"
              :title="currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
              @click="toggleTheme"
            >
              <Moon v-if="currentTheme === 'light'" aria-hidden="true" />
              <Sun v-else aria-hidden="true" />
            </Button>
          </div>

          <div
            class="flex flex-col px-[1.1rem] pb-[1.2rem] min-[761px]:grid min-[761px]:grid-cols-[148px_minmax(0,1fr)_minmax(220px,270px)] min-[761px]:items-start min-[761px]:gap-[clamp(1.5rem,3vw,2.5rem)] min-[761px]:px-[clamp(1.5rem,3vw,2.5rem)] min-[761px]:pb-[clamp(1.5rem,3vw,2.5rem)]"
          >
            <div class="relative z-[1] -mt-[52px] min-[761px]:-mt-[74px]">
              <Avatar fallback="JM" alt="Januar Maksum avatar placeholder" />
            </div>

            <div class="w-full min-w-0 pt-[1.15rem] min-[761px]:w-auto min-[761px]:pt-[clamp(1.5rem,3vw,2.5rem)]">
              <p
                class="mb-[0.8rem] text-[clamp(0.84rem,1.35vw,1.05rem)] leading-[1.6] text-foreground/70 max-[420px]:text-[0.8rem] [&_span]:mx-[0.22em] [&_span]:inline-block [&_span]:font-heading [&_span]:text-foreground"
              >
                Frontend Developer <span aria-hidden="true">|</span> Fullstack
                <span aria-hidden="true">|</span> React <span aria-hidden="true">|</span> Vue
                <span aria-hidden="true">|</span> TypeScript
                <span aria-hidden="true">|</span> Node.js
              </p>
              <h1
                id="profile-title"
                class="text-[clamp(2.7rem,6.5vw,6.5rem)] leading-[0.95] tracking-[-0.065em] wrap-break-word max-[420px]:text-[clamp(2.35rem,13vw,3rem)]"
              >
                Januar Maksum
              </h1>
              <p
                class="mt-[1.15rem] flex items-center gap-[0.55rem] text-[clamp(0.95rem,1.7vw,1.15rem)] text-foreground/70 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-foreground"
              >
                <MapPin aria-hidden="true" />
                Jakarta, Indonesia
              </p>
            </div>

            <div
              class="mt-6 grid w-full grid-cols-1 gap-[0.9rem] border-t-2 border-border pt-5 min-[421px]:grid-cols-2 min-[761px]:mt-[clamp(1.5rem,3vw,2.5rem)] min-[761px]:w-auto min-[761px]:grid-cols-1 min-[761px]:border-t-0 min-[761px]:border-l-2 min-[761px]:pt-0 min-[761px]:pl-[clamp(1.25rem,2.5vw,2rem)]"
              aria-label="Social profiles"
            >
              <template v-for="social in socialItems" :key="social.label">
                <Button
                  v-if="social.href"
                  class="min-h-13 w-full text-base"
                  as="a"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="neutral"
                >
                  {{ social.label }}
                </Button>
                <Button
                  v-else
                  class="min-h-13 w-full text-base"
                  type="button"
                  variant="neutral"
                  disabled
                  :aria-label="`${social.label} link not available yet`"
                >
                  {{ social.label }}
                </Button>
              </template>
            </div>
          </div>
        </section>
      </Card>

      <Tabs
        class="mt-[clamp(1.5rem,3vw,2.5rem)]"
        default-value="experience"
        orientation="horizontal"
      >
        <div
          class="overflow-x-auto overscroll-x-contain pr-1 pb-2 [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin] min-[900px]:overflow-x-visible"
        >
          <TabsList
            class="grid min-w-[790px] grid-cols-5 gap-[clamp(0.65rem,1.5vw,1rem)] min-[900px]:min-w-0"
            aria-label="Portfolio sections"
          >
            <TabsTrigger v-for="tab in tabs" :key="tab.id" :value="tab.id">
              {{ tab.label }}
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="experience">
          <Card :class="panelCardClass">
            <span :class="panelIconClass" aria-hidden="true">
              <BriefcaseBusiness />
            </span>
            <div>
              <p :class="panelKickerClass">Experience</p>
              <h2 :class="panelHeadingClass">Work history is coming soon.</h2>
              <p :class="panelBodyClass">
                No fictional roles, companies, or dates have been added.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card :class="panelCardClass">
            <span :class="panelIconClass" aria-hidden="true">
              <UserRound />
            </span>
            <div>
              <p :class="panelKickerClass">About</p>
              <h2 :class="panelHeadingClass">Frontend focus, fullstack perspective.</h2>
              <p :class="panelBodyClass">
                Januar Maksum is a frontend developer and fullstack practitioner based in
                Jakarta, Indonesia, working with React, Vue, TypeScript, and Node.js.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card :class="panelCardClass">
            <span :class="panelIconClass" aria-hidden="true">
              <FolderKanban />
            </span>
            <div>
              <p :class="panelKickerClass">Portfolio</p>
              <h2 :class="panelHeadingClass">Selected work will be added here.</h2>
              <p :class="panelBodyClass">
                No placeholder projects or invented outcomes are being presented.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card :class="panelCardClass">
            <span :class="panelIconClass" aria-hidden="true">
              <Mail />
            </span>
            <div>
              <p :class="panelKickerClass">Contact</p>
              <h2 :class="panelHeadingClass">Contact details are not available yet.</h2>
              <p :class="panelBodyClass">
                LinkedIn and GitHub will become active when their URLs are provided.
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card :class="panelCardClass">
            <span :class="panelIconClass" aria-hidden="true">
              <Code2 />
            </span>
            <div>
              <p :class="panelKickerClass">Skills</p>
              <h2 :class="panelHeadingClass">Core technologies</h2>
              <div class="mt-5 flex flex-wrap gap-[0.8rem]" aria-label="Core technologies">
                <Badge v-for="skill in skills" :key="skill">
                  {{ skill }}
                </Badge>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  </div>
</template>
