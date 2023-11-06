import './index.css'

function App() {
  return (
    <>

      <div className="container">
          <h6>
            Peña Oficial Miami del
          </h6>
          <div className="#smlogo1">
          </div>

        <div className="#formCard">
        <h2>Registro Gratuito</h2>
            <form>
              <label><h5>Nombre Completo:</h5></label><br></br>
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

