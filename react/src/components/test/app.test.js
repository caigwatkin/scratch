import App from '../app'
import { renderComponent } from './util'
import { screen } from '@testing-library/react'

describe('test app routing', () => {
  const STORE = {
    tmp: {
      tmpReadFailure: false,
      tmpReadPending: false,
      tmpReadSuccess: false,
    },
  }

  test('the tmp is component rendered by default', async () => {
    renderComponent(<App />, {
      store: STORE,
    })

    const tmpComponent = screen.getByText('tmp')
    expect(tmpComponent).toBeInTheDocument()
  })

  test('the test component is rendered when path is /test', async () => {
    renderComponent(<App />, {
      path: '/test',
      store: STORE,
    })

    const testComponent = screen.getByText('test')
    expect(testComponent).toBeInTheDocument()
  })
})
