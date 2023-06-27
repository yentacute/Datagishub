import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import specific icons */
import { faGaugeSimpleHigh, faChevronRight, faChevronDown, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGaugeSimpleHigh, faChevronRight, faChevronDown, faCalendarDays)

/* add font awesome icon component */


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
