import { createVuetify } from 'vuetify';
// vuetify icon 載入
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi.mjs';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { DefaultTheme } from '@/theme/LightTheme';

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'DefaultTheme',
    themes: {
      DefaultTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi,
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
