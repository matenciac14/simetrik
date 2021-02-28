import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const PanelUser = () => {
    const info = useSelector(state => state.informations.usuarios)
    const [dataUser, setDataUser]= useState([])
    
    useEffect(() => {
        setDataUser(info)        
    }, [info])

    

    return (
        <div className=" card col-sm-12 col-md-6 modulesContent mb-2">
        <h4 className='card-header'>Usuarios</h4>
        <ul className="list-group">
        {dataUser ? dataUser.map((item) => (
            <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
               {item.name.lastName+' '+item.name.firstName}
                <span className="badge badge-primary badge-pill" onClick={() => alert('holaaa')}>Ver</span>
            </li>
        )) : null}
            
            
        </ul>
    </div>
    )
}

export default PanelUser
