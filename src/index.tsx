import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import i18n from './app/app-localization.module';
import RouterComponent from './app/app-routing.module';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <RouterProvider router={RouterComponent} />
        </I18nextProvider>
    </StrictMode>,
);
