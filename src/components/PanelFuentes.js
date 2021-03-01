import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const PanelFuentes = () => {
    const info = useSelector(state => state.informations.fuentes)
    const [dataFuentes, setDataFuentes]= useState([])
    
    useEffect(() => {
        setDataFuentes(info)        
    }, [info])

    return (
        <div className=" card col-sm-12 col-md-6 modulesContent mb-2">
        <h4 className='card-header'>Fuentes</h4>
        <ul className="list-group">
        {dataFuentes && dataFuentes.length > 0  ? dataFuentes.map((item) => (
            <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
               {item.name}
                <span className="badge badge-primary badge-pill" onClick={() => alert('holaaa, aca crearia un componente para msotrar la info')}>Ver</span>
            </li>
        )) : 
        <li key={1} className="list-group-item d-flex justify-content-between align-items-center">
               No hemos encontrado datos
            </li>
        }
        </ul>
    </div>
    )
}

export default PanelFuentes
