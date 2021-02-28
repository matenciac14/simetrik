import React,{useState} from 'react'
import '../index.css'
import {  useDispatch } from 'react-redux';
import { setDataSearch } from '../actions/informationActions'

const Header = () => {
   const dispatch = useDispatch()
   const [typeinput, setTypeInput] = useState('text')
   const [valueInputSearch, setValueInputSearch] = useState({
      type:'',
      inputvalue:''
   })

   const setValuesSearch =(e) =>{
      if(e.target.name === 'selectTypeInput'){
         setTypeInput(e.target.value)
         return
      }
      setValueInputSearch({
         ...valueInputSearch,
         type:typeinput,
         inputvalue:e.target.value
      })

   }

   const SerachInformation = (e) => {
      console.log(valueInputSearch)
      e.preventDefault()
      //valuidations
      if (valueInputSearch.value === "" || valueInputSearch.type === "") {
         console.log('ingresa la data correcta')
      } else {
         dispatch(setDataSearch(valueInputSearch))
         setTypeInput('text')
         setValueInputSearch({
            type: 'text',
            inputvalue: ''
         })
      }

   }


   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark jus">
         <div className="container">
            <p className="navbar-brand">Simetrik</p>
            <form className="d-flex" onSubmit={(e)=> SerachInformation(e)}>
               <select className="form-control" aria-label="Default select example" name='selectTypeInput' onChange={(e)=> setValuesSearch(e)}>
                  <option key ={1} value="text">Texto</option>
                  <option key ={2} value="number">Numero</option>
                  <option key ={3} value="date">Fecha</option>
               </select>
               <input className="form-control mx-2" type={typeinput} placeholder="Palabra clave" aria-label="Buscar" name='valueToSearch' value={valueInputSearch.inputvalue} onChange={(e)=> setValuesSearch(e)}/>
               <button className="btn btn-outline btn-primary" type="submit">buscar</button>
            </form>
         </div>
      </nav>
   )
}

export default Header
