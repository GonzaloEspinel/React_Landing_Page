import rmLogo from './assets/img/logo_RM.png'


// import  {useState} from 'react'
import './index.css'



function App() {
  return (
    <>

      <div className="flex-container">
        <div className="nav">
          <a href="http://www.realmadrid.com/es/" target="_blank" rel="noreferrer">
            <img src={rmLogo} className="logo" />
          </a>
          <h3>Bienvenido a</h3>
          <h1>
            La Peña Oficial Miami del Real Madrid C.F.
          </h1>
        </div>
        <div className='menu'>
          <li>
            Menu1
          </li>
          <li>
            Menu2
          </li>
          <li>
            Menu3
          </li>
        </div>
        <div className="hero">
          <h3>
            La Peña Oficial Miami del Real Madrid C.F.
          </h3>
          <p> es un grupo de madridistas que realiza eventos durante los juegos del Real Madrid C.F. lo invitamos a registrarse para informacion de eventos y ofertas especiales para socios, miembros y fanaticos de nuestro querido Real Madrid </p>
        </div>
        

      </div>

      <div className="flex-col-ben">
        <h1>Beneficios</h1>
        <div className="card">
          <div className="text">
            <h5>Madridista Premium</h5>
            <h1>Free</h1>
            <h5>Lista de Beneficios</h5>
            <a href="http://www.realmadrid.com/es/" target="_self" rel="noreferrer"></a>
            <input type="submit" value="Submit"></input>
          </div>
        </div>

        <div className="card" >
        <div className="text">
            <h5>Madridista Socio</h5>
            <h1>Free</h1>
            <h5>Lista de Beneficios</h5>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
        <div className="card">
        <div className="text">
            <h5>Madridista Fan</h5>
            <h1>15$</h1>
            <h5>Lista de Beneficios</h5>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="formCard">
          <h2>Registro Gratuito</h2>
          <form>
            <label><h5>Nombre Completo:</h5></label>
            <input type="text" id="name" name="name" />
            <label><h5>#de Socio</h5></label>
            <input type="text" id="socio" name="socio" />
            <label><h5>e-Mail:</h5></label>
            <input type="text" id="email" name="email" />
            <input type="submit" value="Submit"></input>
          </form>
          <p>
            Registrese y concurse por una camiseta del 1er equipo del Real Madrid C.F
          </p>
        </div>

      </div>

    </>
  )
}

export function Calendario() {
  return (
    <>
      html here
    </>
  )
}
export function Registrese() {
  return (
    <>
      html here
    </>
  )
}

export default App

