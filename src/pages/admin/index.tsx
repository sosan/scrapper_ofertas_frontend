// https://bezkoder.com/react-jwt-auth/
// https://bezkoder.com/react-hooks-jwt-auth/
// https://react-svgr.com/playground/?typescript=true
// https://formik.org/docs/overview

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import EmailSvgComponent from "./components/EmailSvgComponent";
import PasswordSvgComponent from "./components/PasswordSvgComponent";


import { Formik, Field, Form } from "formik";
import { number } from 'prop-types';

interface Values
{
  email: String,
  password: String,
  username: String,
  // countClicked: Number
};

export class LoginClass
{
  constructor()
  {

  }

};

export default function Login()
{

  let [ isLogged, setLogged ]  = useState(false);
  const [countClicked, setCountClicked ] = useState(0);

  async function sendForm(values: Values)
  {

    //en caso de estar logueado que no pulse
    if (isLogged === true)
    {
      return;
    }

    if (values["username"] !== "" && values["password"] === "" && values["password"] === "")
      return;

    let nextCountClicked = countClicked + 1;
    setCountClicked(nextCountClicked);

    // useEffect(function updateTitle() {
    //   document.title = "sdfsdf";
    // });

    // useEffect(() => {
    //   fetch('https://run.mocky.io/v3/40a13c3b-436e-418c-85e3-d3884666ca05')
    //     .then(res => res.json())
    //     .then(data => setCountries(data))
    // }, [])

    // 4 envios de formularios
    if (nextCountClicked > 4)
    {
      console.log("444");

      const host: string = process.env.NODE_BACKEND_HOST || "";
      if (host === "")
      {
        return;
      }

      await fetch(host);

      setCountClicked(0);



        // .then(res => res.json())
        // .then(data => {
        //   console.log("dfsdf");
        // });

    }

    console.log("contador=" + nextCountClicked);

    setLogged(false);


  }


  if (isLogged === false)
  {
    return(
    <>
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <div className="container">
      <main className="session">
        <section className="left">
        </section>
        <section className="right">

              <Formik
                initialValues={ { email: "", password: "", username: "", countClicked: 0 } }
                onSubmit={sendForm}
                // onSubmit={async values => {
                //   await new Promise(resolve => setTimeout(resolve, 500));
                //   alert(JSON.stringify(values, null, 2));
                // }}
              >
                <Form>
                  <Field type="hidden" name="username" value="" id="username" />
                  <h2>{countClicked}</h2>
                  {/* <Field type="hidden" name="clicked" value={ countClicked } id="clicked" /> */}
                  <h1 className="titulo">Login</h1>
                  <p className="parrafo">Para poder entrar escribe el usuario y la contraseña</p>
                  <div className="floating-label">
                    <Field id="email" className="inputs" placeholder="Email" type="email" name="email" autoComplete="off" autoFocus required />
                    <label htmlFor="email">Email:</label>
                    <div className="icon">
                      <EmailSvgComponent />
                    </div>
                  </div>
                  <div className="floating-label">
                    <Field id="password" className="inputs" placeholder="Password" type="password" name="password" autoComplete="off" required/>
                    <label htmlFor="password">Contraseña:</label>
                    <div className="icon">
                      <PasswordSvgComponent />
                    </div>
                  </div>
                  <button type="submit">Entrar</button>

                </Form>
              </Formik>
        </section>
      </main>
      </div>

    </>
    );

  }
  else
  {

    //redirect ?
    return(
      <>
      </>
    );
  }


}


