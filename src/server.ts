import * as Koa from "koa";
import * as Router from "koa-router";
import * as Mount from "koa-mount";
import * as graphqlHTTP from "koa-graphql";

import schema from './schemas'

const app = new Koa();
const router = new Router();

router.get("/*", async ctx => {
  ctx.body = "Hello World!";
});

app.use(Mount("/graphql", (graphqlHTTP as any)({ schema, graphiql: true })));
app.use(router.routes());

const PORT = 3002;

app.listen(PORT);

console.log("Server running on port 3000");
