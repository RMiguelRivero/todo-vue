import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Icon from '../src/components/Icon';
import TodoListItem from '../src/components/TodoListItem.vue'

// Register custom components.
Vue.component('Icon', Icon);
Vue.component('TodoListItem', TodoListItem);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories/icon');
  require('../stories/todo-item');
}

configure(loadStories, module);
