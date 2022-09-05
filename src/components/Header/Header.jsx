import React from 'react';

import {Nav} from '../Nav/Nav';

import styles from './Header.module.scss';


export const Header = (props) => {

	return (
		<header className={styles.header}>
			<div className={props.styleContainer}>
				<Nav/>
			</div>
		</header>
	);
};