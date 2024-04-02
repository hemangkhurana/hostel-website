import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { Analytics } from '@vercel/analytics/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
        <Analytics />
    </>
);
