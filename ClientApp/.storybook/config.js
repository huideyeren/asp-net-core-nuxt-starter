import { configure, addDecorator } from '@storybook/vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import decorator from './Decorator';
import { withA11y } from '@storybook/addon-a11y';

const vuetifyOptions = { }

Vue.use(Vuetify, {
  customVariables: ['../src/assets/variables.scss'],
  theme: {
    dark: false,
    themes: { // うちではこのように設定していますが、それぞれの環境に合わせてください
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
});

addDecorator(() => ({
  components: { decorator },
  vuetify: new Vuetify(vuetifyOptions),
  template: `<v-app><decorator><story slot="story" /></decorator></v-app>`
}));

addDecorator(withA11y);

const req = require.context('../stories', true, /.stories.[jt]s$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);