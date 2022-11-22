import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/renderLoader';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App=lazy(()=>import("./App"))
root.render(
  <React.StrictMode>
    <Suspense fallback={Loading()}>
    <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
