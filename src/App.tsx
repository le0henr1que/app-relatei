import { BrowserRouter } from 'react-router-dom';
import { GlobalRoutes } from './routes';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <GlobalRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
