import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux';
import { getInformationAction } from '../actions/informationActions'
import PanelUser from './PanelUser'
import PanelTableros from './PanelTableros'
import PanelFuentes from './PanelFuentes'
import PanelConciliaciones from './PanelConciliaciones'

const Content = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = () => dispatch(getInformationAction())
        getInfo()
    }, [])


    return (
        <div className="container containermodules">
            <div className="row ">
                <PanelUser/>
                <PanelFuentes/>
            </div>
            <div className="row">
                <PanelTableros/>
                <PanelConciliaciones/>
            </div>
        </div>
    )
}

export default Content
