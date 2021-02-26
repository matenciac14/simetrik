
import Header from './components/Header'
import './index.css'

//redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
      </Provider>
    </>
  );
}

export default App;
