import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from '@testing-library/react'

export const renderComponent = (component, mocks) => {
  const mockPath = mocks?.path || '/'

  const mockStore = configureStore()(mocks?.store || {})
  mockStore.dispatch = mocks?.dispatch || jest.fn()

  const Wrapper = ({ children }) => {
    return (
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={[mockPath]}>{children}</MemoryRouter>
      </Provider>
    )
  }

  return render(component, { wrapper: Wrapper })
}
