import React from 'react'

const Panel = ({title, data}) => {
    return (
        <div className=" card col col-md-6 modulesContent">
        <h4 className='card-header'>{title}</h4>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span class="badge badge-primary badge-pill">Ver</span>
            </li>
            
        </ul>
    </div>
    )
}

export default Panel
