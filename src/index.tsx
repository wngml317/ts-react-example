import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
        {/* Redux 스토어 제공 */}
        {/* Provider 는 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트 */}
        <App />
    </BrowserRouter>
  </Provider>
);
