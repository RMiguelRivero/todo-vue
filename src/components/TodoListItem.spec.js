import { shallowMount, mount } from '@vue/test-utils';
import TodoListItem from './TodoListItem';
import Icon from './Icon.vue';

describe('TodoListItem.vue', () => {
  const propsData = {
    id: '9012-3456',
    text: 'test example',
    completed: true,
    handleToggleTodo: () => void 0,
    handleRemoveTodo: () => void 0,
  };
  const wrapper = shallowMount(TodoListItem, {
    propsData,
  });

  it('checkbox should be checked', () => {
    const checked = wrapper.vm.completed;

    expect(checked).toBe(true);
  });

  it('checkbox should not be checked', () => {
    wrapper.setProps({ completed: false });
    const checked = wrapper.vm.completed;

    expect(checked).toBe(false);
  });

  it('click on input should call toggleHandler', () => {
    const spy1 = jest.spyOn(wrapper.vm, 'handleToggleTodo');

    wrapper.find('input[type=checkbox]').trigger('click');
    expect(spy1).toBeCalled();
  });

  it('click on X icon should call removeHandler', () => {
    const wrapper2 = mount(TodoListItem, {
      propsData,
      components: { Icon },
    });
    const spy2 = jest.spyOn(wrapper2.vm, 'handleRemoveTodo');
    wrapper2.find('.icon').trigger('click');
    expect(spy2).toBeCalled();
  });

});
