export class StorageService {
    get accessToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    get refreshToken(): string | null {
        return localStorage.getItem('refreshToken');
    }

    set accessToken(value: any) {
        localStorage.setItem('accessToken', String(value));
    }

    set refreshToken(value: any) {
        localStorage.setItem('refreshToken', String(value));
    }
}
