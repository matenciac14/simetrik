import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getInformationAction } from '../actions/informationActions'
import Panel from './Panel'

const Content = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getInfo = () => dispatch(getInformationAction())
        getInfo()
    }, [])

    const informations = useSelector(state => state.informations.information)

    console.log('DAstos desde content', informations)
    return (
        <div className="container containermodules">
            <div className="row ">
                <Panel
                    title={'Usuarios'}
                    data={[]}
                />
                <Panel
                    title={'Fuentes'}
                    data={[]}
                />

            </div>
            <div className="row">
                <Panel
                    title={'Tableros'}
                    data={[]}
                />
                <Panel
                    title={'Conciliaciones'}
                    data={[]}
                />
            </div>
        </div>
    )
}

export default Content
