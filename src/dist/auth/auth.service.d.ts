import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    createUser(email: string, password: string): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            password: any;
        };
    }>;
    loginUser(email: string, password: string): Promise<{
        message: string;
        token: string;
    }>;
}
