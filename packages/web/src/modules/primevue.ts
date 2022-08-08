import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import Button from 'primevue/button'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app
    .use(PrimeVue, { ripple: true })
    .use(ConfirmationService)
    .use(ToastService)
    .directive('tooltip', Tooltip)
    .component('Button', Button)
}
