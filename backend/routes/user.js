import { Router } from 'express';
import { registerUser } from '../controllers/user.js';

const userRouter = new Router();

// Add routes
/**
 *
 * Route        GET /api/users/register
 * Description  Register a user
 * scope        public
 *  */
userRouter.post('/register', registerUser);
// userRouter.post('/', SessionController.store);
// userRouter.put('/', SessionController.store);
// userRouter.delete('/', SessionController.store);

export default userRouter;
