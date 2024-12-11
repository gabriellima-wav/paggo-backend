import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            password: any;
        };
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        token: string;
    }>;
}
