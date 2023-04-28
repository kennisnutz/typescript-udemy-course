import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';


function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('not authorized');
}

@controller('')
class RouteController {
  @get('/')
  getRoute(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Log out</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/auth/login">Log in</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
      <div>
        <h1>Welcome to protected Route</h1>
        
      </div>
      `);
  });
}
