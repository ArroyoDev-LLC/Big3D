import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

// setup up pages with layouts
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
app.use(router)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.({ app, router, routes, isClient: true })
)

app.mount('#app')
