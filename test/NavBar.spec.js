import { shallowMount } from '@vue/test-utils'
import NavBar from '~/components/NavBar.vue'

describe('NavBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(NavBar)
  })

  test('should have child component nuxt-link', () => {
    expect(wrapper.findAll('nuxt-link').length).toEqual(2)
  })

  test('has expected html structure', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
