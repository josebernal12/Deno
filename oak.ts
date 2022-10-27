import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router()

router.get("/", (ctx: Context) => {
    const title = 'Hola Servidor Deno'
    const titleinvertido = title.split('').reverse().join('')
    ctx.response.body = titleinvertido;
});
router.get("/hola", (ctx: Context) => {
    ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1 style="color: blue;">Hola como estas?</h1>
      </body>
    </html>
    `;
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
