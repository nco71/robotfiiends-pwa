import React from 'react'
import ErrorBoundary from '../components/ErrorBoundry'
import { mount } from 'enzyme'

describe('Error Boundary component test', () => {

    it('should display the component inside if no errors', () => {

      const wrapper = mount(
        <ErrorBoundary>
          <div id="result">result</div>
        </ErrorBoundary>
      );
    expect(wrapper.find('#result').length).toBe(1)
    })

    it('should display iself if some errors appears', () => {

      const WrappedComponent = props => {
        throw new Error('Errored!')
      }
      const spy = jest.spyOn(console, 'error')
      //https://github.com/facebook/react/issues/11098
      spy.mockImplementation(() => {})

      expect(mount(<ErrorBoundary><WrappedComponent /></ErrorBoundary>).html()).toEqual(
        "<h1>Something went wrong.</h1>"
      )
      spy.mockRestore()
    })
})