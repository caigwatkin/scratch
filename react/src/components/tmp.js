import { connect } from 'react-redux'
import { Pane, Text } from 'evergreen-ui'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { TMP_READ } from '../actions/tmp'

const propTypes = {
  tmpRead: PropTypes.func.isRequired,
  tmpReadFailure: PropTypes.bool.isRequired,
  tmpReadPending: PropTypes.bool.isRequired,
  tmpReadSuccess: PropTypes.bool.isRequired,
}

function Tmp(props) {
  const { tmpRead, tmpReadFailure, tmpReadPending, tmpReadSuccess } = props

  useEffect(() => {
    tmpRead()
  }, [tmpRead])

  const isDefault = !tmpReadFailure && !tmpReadPending && !tmpReadSuccess

  return (
    <Pane className={'tmp'}>
      <Text>tmp</Text>

      {isDefault && <Text>default</Text>}

      {tmpReadFailure && <Text>failure</Text>}

      {tmpReadPending && <Text>pending</Text>}

      {tmpReadSuccess && <Text>success</Text>}
    </Pane>
  )
}

Tmp.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    tmpReadFailure: state.tmp.tmpReadFailure,
    tmpReadPending: state.tmp.tmpReadPending,
    tmpReadSuccess: state.tmp.tmpReadSuccess,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tmpRead: () => {
      dispatch({
        type: TMP_READ,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tmp)
