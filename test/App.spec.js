import { shallowMount } from '@vue/test-utils'
import index from '~/pages'

describe('App.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index)
  })

  test('has expected html structure when side-bar component render in the DOM', async () => {
    await wrapper.setData({ showSidebar: true })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('has expected html structure when side-bar component not render in the DOM', async () => {
    await wrapper.setData({ showSidebar: false })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
