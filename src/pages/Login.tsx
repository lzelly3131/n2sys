// Create: Eduardo Lemus

import Buttons from "../components/AgreeDeclineBtns"
import '../styles/Login.css'

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="main-contein">
      <div className="card p-4 shadow col-12 col-md-4">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        
        {/* Campo Usuario */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input 
            type="text" 
            id="username" 
            className="form-control" 
            placeholder="Ingrese su usuario"
          />
        </div>

        {/* Campo Contraseña */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Ingrese su contraseña"
          />
        </div>

        {/* Botones reutilizables */}
        <Buttons agree="Ingresar" decline="Crear Cuenta" />
      </div>
    </div>
  )
}

export default Login
