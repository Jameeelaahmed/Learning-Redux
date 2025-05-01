import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './Store';
import Header from './components/Header'
import Auth from './components/Auth'
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <Auth />
    </Provider>
  );
}

export default App;
