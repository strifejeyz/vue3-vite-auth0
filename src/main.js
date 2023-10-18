/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue'
import {createAuth0} from "@auth0/auth0-vue"
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import Store from "./state/store"

const app = createApp(App)

registerPlugins(app)
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
    }
  })
)
app.use(Store)
app.mount('#app')
