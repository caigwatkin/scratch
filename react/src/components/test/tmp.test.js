import Tmp from '../tmp'
import { renderComponent } from './util'
import { screen } from '@testing-library/react'
import { TMP_READ } from '../../actions/tmp'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

describe('test tmp component', () => {
  const STORE = {
    tmp: {
      tmpReadFailure: false,
      tmpReadPending: false,
      tmpReadSuccess: false,
    },
  }

  test('tmp text shown, tmp read dispatched on first load', async () => {
    const dispatch = jest.fn()

    renderComponent(<Tmp />, {
      dispatch: dispatch,
      store: STORE,
    })

    expect(dispatch).toHaveBeenCalledWith({
      type: TMP_READ,
    })

    const tmpText = screen.getByText('tmp')
    expect(tmpText).toBeInTheDocument()

    userEvent.click(tmpText)
    await waitFor(() => expect(tmpText).toBeInTheDocument())
  })

  test('default text shown (only) by default', async () => {
    renderComponent(<Tmp />, {
      store: STORE,
    })

    const defaultText = screen.getByText('default')
    expect(defaultText).toBeInTheDocument()

    const failureText = screen.queryByText('failure')
    expect(failureText).not.toBeInTheDocument()
    const pendingText = screen.queryByText('pending')
    expect(pendingText).not.toBeInTheDocument()
    const successText = screen.queryByText('success')
    expect(successText).not.toBeInTheDocument()
  })

  test('failure text shown (only) when tmp read failure', async () => {
    const store = {
      ...STORE,
      tmp: {
        ...STORE.tmp,
        tmpReadFailure: true,
      },
    }

    renderComponent(<Tmp />, {
      store: store,
    })

    const failureText = screen.getByText('failure')
    expect(failureText).toBeInTheDocument()

    const defaultText = screen.queryByText('default')
    expect(defaultText).not.toBeInTheDocument()
    const pendingText = screen.queryByText('pending')
    expect(pendingText).not.toBeInTheDocument()
    const successText = screen.queryByText('success')
    expect(successText).not.toBeInTheDocument()
  })

  test('pending text shown (only) when tmp read pending', async () => {
    const store = {
      ...STORE,
      tmp: {
        ...STORE.tmp,
        tmpReadPending: true,
      },
    }

    renderComponent(<Tmp />, {
      store: store,
    })

    const pendingText = screen.getByText('pending')
    expect(pendingText).toBeInTheDocument()

    const defaultText = screen.queryByText('default')
    expect(defaultText).not.toBeInTheDocument()
    const failureText = screen.queryByText('failure')
    expect(failureText).not.toBeInTheDocument()
    const successText = screen.queryByText('success')
    expect(successText).not.toBeInTheDocument()
  })

  test('success text shown (only) when tmp read success', async () => {
    const store = {
      ...STORE,
      tmp: {
        ...STORE.tmp,
        tmpReadSuccess: true,
      },
    }

    renderComponent(<Tmp />, {
      store: store,
    })

    const successText = screen.getByText('success')
    expect(successText).toBeInTheDocument()

    const defaultText = screen.queryByText('default')
    expect(defaultText).not.toBeInTheDocument()
    const failureText = screen.queryByText('failure')
    expect(failureText).not.toBeInTheDocument()
    const pendingText = screen.queryByText('pending')
    expect(pendingText).not.toBeInTheDocument()
  })
})
