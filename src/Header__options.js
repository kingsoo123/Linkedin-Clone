import React from 'react'
import './headerOptions.css'
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'

function HeaderOptions({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser)

    return (
        <div className="headerOptions" onClick={onClick}>
            {Icon && <Icon className="headerOptions__icons"/>}
            {avatar && <Avatar className="headerOptions__icons" src={user?.photoUrl}>{user?.displayName[0].toUpperCase()}</Avatar>}
            <h3 className="headerOption__title">{title} </h3>
            
            
        </div>
    )
}

export default HeaderOptions
