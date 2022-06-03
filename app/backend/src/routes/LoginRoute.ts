import * as express from 'express';
import LoginController from '../controllers/LoginController';

export default class LoginRoute {
  private route: express.Router;
  private loginController: LoginController;

  constructor() {
    this.route = express.Router();
    this.loginController = new LoginController();
  }

  init() {
    return this.route
      .post(
        '/',
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction,
        ) => {
          this.loginController.login(req, res, next);
        },
      )
      .get('/validate', (req: express.Request, res: express.Response) => {
        this.loginController.validate(req, res);
      });
  }
}
