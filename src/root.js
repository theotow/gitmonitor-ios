import React from 'react-native'
import { Provider } from 'react-redux/native'

import App from './containers/App'
import storeSetup from './store'

const store = storeSetup()

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

export default Root
