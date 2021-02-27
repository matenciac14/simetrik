
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './index.css'

//redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Content/>
        <Footer/>
      </Provider>
    </>
  );
}

export default App;
