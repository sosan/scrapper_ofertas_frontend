require("dotenv").config();

const express = require('express');
const next = require('next');
const cors = require("cors");

//TOOD CSRF
// const csrf = require('csurf');
// const cookieParser = require('cookie-parser');
// const csrfProtection = csrf({ cookie: true });

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.NODE_FRONT_PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {

    const server = express();

    server.disable('x-powered-by');
    server.disable('server');

    server.get('*', (req, res) =>
    {

      //TODO: process.env.baseurl
      const parsedUri = new URL(req.url, process.env.BASE_URL);
      if (parsedUri)
      {
        const pathName = parsedUri["pathname"];
        const _query = parsedUri["query"] || undefined;
        app.render(req, res, pathName, _query);

      }


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
