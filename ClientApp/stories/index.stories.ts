import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';
// 追記
import PartsHeader from '../components/MyHeader';

storiesOf('Components', module).add('Header', () => ({
  components: { PartsHeader },
  template: '<my-header />',
}));
