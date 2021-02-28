import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const PanelTableros = () => {
    const info = useSelector(state => state.informations.tableros)
    const [dataTableros, setDataTableros]= useState([])
    
    useEffect(() => {
        setDataTableros(info)        
    }, [info])

    return (
        <div className=" card col-sm-12 col-md-6 modulesContent mb-2">
        <h4 className='card-header'>Tableros</h4>
        <ul className="list-group">
           {dataTableros ? dataTableros.map((item) => (
            <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
               {item.dashboardName}
                <span className="badge badge-primary badge-pill" onClick={() => alert('holaaa')}>Ver</span>
            </li>
        )) : null}
        </ul>
    </div>
    )
}

export default PanelTableros
