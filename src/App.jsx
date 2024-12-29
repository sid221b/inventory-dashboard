import { Provider } from 'react-redux'
import store from './store/index.js'
import Inventory from './pages/inventory/index.jsx'

function App() {
  return (
    <Provider store={store}>
      <Inventory />
    </Provider>
  )
}

export default App
