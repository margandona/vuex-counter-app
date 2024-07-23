// tests/unit/communication.spec.js
import { mount } from '@vue/test-utils';
import ParentApp from '@/components/ParentApp.vue';
import ChildApp from '@/components/ChildApp.vue';

describe('Parent and Child communication', () => {
  it('should send text from Child to Parent', async () => {
    const wrapper = mount(ParentApp);
    const childWrapper = wrapper.findComponent(ChildApp);

    // Verificar que el componente ChildApp está presente
    expect(childWrapper.exists()).toBe(true);

    // Usar input en vez de setData
    const input = childWrapper.find('input');
    // Verificar que el input existe
    if (!input.exists()) {
      console.log('Input no encontrado. HTML renderizado:', childWrapper.html());
    }
    expect(input.exists()).toBe(true);

    await input.setValue('Hello');
    await childWrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain('Hello');
  });
});
