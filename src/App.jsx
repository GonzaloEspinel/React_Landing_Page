function App() {
  return (
    <>

      <div className="flex-container">
        <div className="nav">
          <h1>
            Peña Oficial Miami del Real Madrid
          </h1>


        </div>
        <div className="hero">
          <img src="./assets/img/bernabeu.jpg" />
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
            Registrese gratuitamente para concursar
            por una camiseta del primer equipo del
            Real Madrid C.F
          </p>
        </div>

      </div>
      <div className="flex-col-ben">
        <h1>Benefits</h1>
        <div className="card">
          <div className="text">
            <h5>Madridista Premium</h5>
            <h1>Free</h1>
            <h5>Lista de Beneficios</h5>
            <input type="submit" value="Submit"></input>
          </div>
        </div>

        <div className="card">

        </div>
        <div className="card">

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

