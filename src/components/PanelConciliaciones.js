import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const PanelConciliaciones = () => {
    const info = useSelector(state => state.informations.conciliaciones)
    const [dataConciliaciones, setDataConciliaciones]= useState([])
    
    useEffect(() => {
        setDataConciliaciones(info)        
    }, [info])

    return (
        <div className=" card col-sm-12 col-md-6 modulesContent mb-2">
        <h4 className='card-header'>Conciliaciones</h4>
        <ul className="list-group">
        {dataConciliaciones ? dataConciliaciones.map((item) => (
            <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
               {item.conciliationName}
                <span className="badge badge-primary badge-pill" onClick={() => alert('holaaa')}>Ver</span>
            </li>
        )) : null}
            
        </ul>
    </div>
    )
}

export default PanelConciliaciones
