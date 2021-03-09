require("dotenv").config();

const express = require('express');
const next = require('next');
const cors = require("cors");

// const csrf = require('csurf');
// const cookieParser = require('cookie-parser');

// const csrfProtection = csrf({ cookie: true });

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {

    const server = express();

    server.disable('x-powered-by');
    server.disable('server');
    // server.use(cookieParser());

    server.get('*', (req, res) =>
    {
      // const parsedUrl = new URL(req.url, 'http://w.w');
      // const { pathname, query } = parsedUrl;

      // if (pathname === '/admin')
      // {
      //   app.render(req, res, '/admin', query)
      // } else if (pathname === '/') {
      //   app.render(req, res, '/', query)
      // } else {
      //   handle(req, res, parsedUrl)
      // }


      const pathName = req._parsedUrl["pathname"];
      const _query = req._parsedUrl["query"] || undefined;
      app.render(req, res, pathName, _query);


    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> ${process.pid} Escuchando en: ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
