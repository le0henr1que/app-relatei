import { BrowserRouter } from 'react-router-dom';
import { GlobalRoutes } from './routes';
import { Provider } from 'react-redux';
import store from './redux/store/configStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
