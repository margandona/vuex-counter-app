// tests/unit/counter.spec.js
import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import CounterApp from '@/components/CounterApp.vue';

describe('CounterApp.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        counter: 0
      },
      mutations: {
        increment(state) {
          state.counter++;
        },
        decrement(state) {
          state.counter--;
        }
      },
      actions: {
        increment({ commit }) {
          commit('increment');
        },
        decrement({ commit }) {
          commit('decrement');
        }
      }
    });
  });

  it('should receive an initial value', () => {
    const wrapper = mount(CounterApp, { global: { plugins: [store] } });
    expect(wrapper.text()).toContain('0');
  });

  it('should increment the counter', async () => {
    const wrapper = mount(CounterApp, { global: { plugins: [store] } });
    await wrapper.find('.btn-success').trigger('click');
    expect(wrapper.text()).toContain('1');
  });

  it('should decrement the counter', async () => {
    const wrapper = mount(CounterApp, { global: { plugins: [store] } });
    await wrapper.find('.btn-danger').trigger('click');
    expect(wrapper.text()).toContain('-1');
  });
});
