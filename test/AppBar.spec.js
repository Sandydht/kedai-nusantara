import { shallowMount } from '@vue/test-utils'
import AppBar from '~/components/AppBar.vue'

describe('AppBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppBar)
  })

  test('should display app title', () => {
    expect(wrapper.find('h1').text()).toBe('Kedai Nusantara')
  })

  test('should emits an event when menu button clicked', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('handleClick')
  })

  test('has expected html structure', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
