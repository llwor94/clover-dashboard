import React from 'react';
import SideNav from './sidebar'
import css from '../../styles/layout.scss'


const Layout = ({children}) => {
    return (
        <div className={css.layout}>
            <SideNav/>
            <div>spaces</div>
            <div className={css.main}>{children}</div>
        </div>
    )
}

export default Layout;