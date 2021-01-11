import React from 'react';

import Link from '../../Link/activeLink';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <Link
            activeClassName={classes.active}
            href={props.link}
            >
            <a>{props.children}</a>
        </Link>
    </li>
)

export default navigationItem;