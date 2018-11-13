import { shallowMount } from '@vue/test-utils';
import TodoApp from './TodoApp';

describe('TodoApp.vue', () => {
  const propsData = {
    todos: [{
      id: '1234-5678',
      text: 'hello',
      completed: true,
    }],
    newTodo: {
      id: '9012-3456',
      text: 'Text example',
      completed: false,
    },
    activeFilter: 'all',
    handleAddTodo: jest.fn(),
    restoreNewTodo: jest.fn(),
    handleChangeFilter: jest.fn(),
    handleChangeNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
  };
  const wrapper = shallowMount(TodoApp, {
    propsData,
  });

  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });


  it('Add todo should call addTodo function', () => {
    const handleAddTodo = wrapper.vm.handleAddTodo;
    const textInput = wrapper.find('input.new-todo');
    textInput.setValue('some value')
    textInput.trigger('keyup.enter');

    const newTodo = {
      ...propsData.newTodo,
      text: 'some value',
    };

    expect(handleAddTodo).toBeCalledWith(newTodo);
  });

  it('Add todo should call restoreNewTodo function', () => {
    const restoreNewTodo = wrapper.vm.restoreNewTodo;

    wrapper.find('input.new-todo').trigger('keyup.enter');
    expect(restoreNewTodo).toBeCalled();
  });

});
