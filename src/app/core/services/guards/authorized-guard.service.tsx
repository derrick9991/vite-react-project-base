import { Navigate, useLocation } from 'react-router-dom';
import { StorageService } from '../storage.service';

const storageService = new StorageService();

export const DefaultRoute = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const token = storageService.accessToken;
    const location = useLocation();

    if (token) {
        return <Navigate to="/protected-route" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const token = storageService.accessToken;
    const location = useLocation();

    if (token) {
        return <>{children}</>;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};
