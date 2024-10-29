import { ENVIRONMENT } from '@src/environment/environment';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { TIMEOUT } from '../constants/http.constant';
import { JwtModel } from '../models/jwt.model';
import { StorageService } from './storage.service';

const AxiosService = axios.create({
    baseURL: ENVIRONMENT.url,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'X-TenantID': 'tenant1', // tenant1 - twentea, tenant2 - dozo
    },
});

const storageService = new StorageService();

AxiosService.interceptors.request.use(
    (config) => {
        const token = storageService.accessToken;
        if (token) {
            const decodedJwt = jwtDecode<JwtModel>(token);
            config.headers['Authorization'] = `Bearer ${decodedJwt.token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

AxiosService.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default AxiosService;
