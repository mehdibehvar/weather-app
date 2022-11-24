import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/renderLoader';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App=lazy(()=>import("./App"))
root.render(
  <React.StrictMode>
    <Suspense fallback={Loading({size:200})}>
    <App />
    </Suspense>
  </React.StrictMode>
);


