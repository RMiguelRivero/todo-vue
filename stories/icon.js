import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action, configureActions } from '@storybook/addon-actions';

const methods = {
  alert: (msg) => alert(msg),
  log: (e) => action('Clicked Icon')(e)
}

import Icon from '../src/components/Icon';

storiesOf('Icon', module)
  // .add('story as a template', () => `<icon :icon="'close-x'" :size="16" :color="'#663399'" :spin='false' :clickable="true" @click="alert('hello world')" />`
  // )
  .add('story as a component size 16 icon close-x color #639 not spining clickable', () => ({
    methods,
    components: { Icon },
    template: ` <Icon :icon="'close-x'" :size="16" :color="'#663399'" :spin='false' :clickable="true" @clicked="log" />`
  }))
  .add('story as a component size 20 icon close-x color #639 spining clickable', () => ({
    methods,
    components: { Icon },
    template: ` <Icon :icon="'close-x'" :size="20" :color="'#663399'" :spin='true' :clickable="true" @clicked="log" />`
  }))
  .add('story as a component size 48 icon close-x color #639 not spining  not clickable', () => ({
    methods,
    components: { Icon },
    template: ` <Icon :icon="'close-x'" :size="64" :color="'#663399'" :spin='false' :clickable="false" @clicked="log" />`
  }));
