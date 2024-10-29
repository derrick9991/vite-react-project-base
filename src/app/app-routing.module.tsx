import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import LoadingComponent from './core/libs/shared/components/loading/loading';
import ErrorBoundary from './core/libs/shared/error-boundary/error-boundary';
import { DefaultRoute, ProtectedRoute } from './core/services/guards/authorized-guard.service';

const NotFound = lazy(() => import('./views/common/not-found/not-found'));

const lazyLoad = (Component: React.ComponentType) => (
    <ErrorBoundary>
        <Suspense fallback={<LoadingComponent />}>
            <Component />
        </Suspense>
    </ErrorBoundary>
);

const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: <DefaultRoute>public</DefaultRoute>,
    },
    {
        path: '/protected-route',
        element: (
            <ProtectedRoute>
                <>private</>
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: lazyLoad(NotFound),
    },
];

const RouterComponent = createBrowserRouter(ROUTES);

export default RouterComponent;
