import { AuthController } from '@/controllers/auth.controller';
import { Router } from 'express';
import {
  inputValidator,
  registerSchema,
} from '../common/helpers/validator.helper';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      inputValidator(registerSchema),
      this.authController.register,
    );
    this.router.post('/login', this.authController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
