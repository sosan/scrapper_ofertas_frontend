// https://bezkoder.com/react-jwt-auth/
// https://bezkoder.com/react-hooks-jwt-auth/
// https://react-svgr.com/playground/?typescript=true
// https://formik.org/docs/overview

import React, { BaseSyntheticEvent, useState } from 'react';
import Head from 'next/head';
import EmailSvgComponent from "./components/EmailSvgComponent";
import PasswordSvgComponent from "./components/PasswordSvgComponent";


import { Formik, Field, Form } from "formik";

interface Values
{
  email: String,
  password: String,
  username: String
};


export default function Login()
{

  let [ isLogged, setLogged ]  = useState(false);


  function sendForm(values: Values)
  {

// let s: object = {
// "email": "asdfsdf@s.fsd.com",
// "password": "skdjflsdf",
// "username": ""
// };

    if (values["username"] !== "" && values["password"] === "" && values["password"] === "")
      return;



    console.log("ssdfsdfsdf")

    //en caso de estar logueado que no pulse
    if (isLogged === true)
    {
      return;
    }


    setLogged(false);

    console.log("clickeado")

  }

  const test = (values: any) =>
  {

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
                initialValues={{ email: "", password: "", username: "" }}
                onSubmit={sendForm}
                // onSubmit={async values => {
                //   await new Promise(resolve => setTimeout(resolve, 500));
                //   alert(JSON.stringify(values, null, 2));
                // }}
              >
                <Form>
                  <Field type="hidden" name="username" value="" id="username" />
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
                  <button type="submit" onClick={ test  }  >Entrar</button>

                </Form>
              </Formik>

          {/* <form action="" className="log-in" autoComplete="off" method="post">
          </form> */}
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


