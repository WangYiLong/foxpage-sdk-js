import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { foxpageMiddleWare } from '@foxpage/foxpage-middleware-koa';

import { routes } from './routes';

const app = new Koa();

app.use(cors());

// custom routers
app.use(routes);

app.use(foxpageMiddleWare(app));

app.use(bodyParser());

export default app;
