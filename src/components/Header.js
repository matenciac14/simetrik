import React from 'react'
import '../index.css'

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark jus">
         <div className="container">
            <p className="navbar-brand">Simetrik</p>
            <form className="d-flex">
               <select className="form-control" aria-label="Default select example">
                  <option key ={1} defaultValue="-">Tipo</option>
                  <option key ={2} value="text">Texto</option>
                  <option key ={3} value="number">Numero</option>
                  <option key ={4} value="date">Fecha</option>
               </select>
               <input className="form-control mx-2" type="search" placeholder="Palabra clave" aria-label="Buscar" />
               <button className="btn btn-outline btn-primary" type="submit">buscar</button>
            </form>
         </div>
      </nav>
   )
}

export default Header
