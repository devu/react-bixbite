import { Component, Children } from 'react'
import PropTypes from 'prop-types'

export function createProvider() {
    class DataProvider extends Component {
        constructor(props, context) {
          super(props, context)
        }

        render() {
          return Children.only(this.props.children)
        }
    }

    DataProvider.propTypes = {
        children: PropTypes.element.isRequired,
    }

    DataProvider.displayName = 'DataProvider'

    return DataProvider
}

export default createProvider()
