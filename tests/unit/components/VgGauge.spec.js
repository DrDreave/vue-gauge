import { shallowMount } from '@vue/test-utils';
import VgGauge from '@/components/VgGauge.vue';

describe('VgGauge.vue', () => {
  it('renders the value', () => {
    const value = 50;
    const wrapper = shallowMount(VgGauge, {
      propsData: { value },
    });
    const label = wrapper.find('.vg-gauge-label');
    expect(label.text()).toBe(value.toString());
  });

  it('renders the content provided via default slot', () => {
    const labelContent = 'Test';
    const wrapper = shallowMount(VgGauge, {
      slots: {
        default: labelContent,
      },
    });
    const label = wrapper.find('.vg-gauge-label');
    expect(label.text()).toBe(labelContent);
  });
});
