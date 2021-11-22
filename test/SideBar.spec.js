import { shallowMount } from '@vue/test-utils'
import SideBar from '~/components/SideBar.vue'

describe('SideBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SideBar)
  })

  test('should emits an event when clicked', async () => {
    await wrapper.find('div').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('handleClick')
  })

  test('has expected html structure', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
