import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from 'redux/store';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ChakraProvider>
          <App />
        </ChakraProvider>
        {/* </PersistGate> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
