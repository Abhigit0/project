import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>
             <nav className={classes.Topbar}>
             <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo" />
             </nav>
        </header>
    )
}

export default Topbar;