import { NextFunction, Request, Response } from 'express';
import { controller, get, use, bodyValidator, post } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('request was made');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
   <form method="POST">
   <div>
   <label>Email</label>
   <input name="email"/>
   </div>
   <div>
   <label>Password</label>
   <input name="password" type="password"/>
   </div>
   <button>Submit</button>
   </form>
  `);
  }
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === 'kenn' && password === 'pass') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('You must provide valid email and password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
