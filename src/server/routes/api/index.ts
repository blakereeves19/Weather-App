import * as express from 'express';

import weatherRouter from './weather';

const apiRouter = express.Router();

apiRouter.use('/weather', weatherRouter);

export default apiRouter;