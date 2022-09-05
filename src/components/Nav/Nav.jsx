import React from 'react';

import styles from './Nav.module.scss';


export const Nav = () => {
	return (
		<div className={styles.block}>
			<nav className={styles.nav}>
				<div className={styles.nav__link}>
					<a href={'#'}>Home</a>
				</div>
				<div className={styles.nav__link}>
					<a href={'#'}>Skills</a>
				</div>
				<div className={styles.nav__link}>
					<a href={'#'}>Works</a>
				</div>
				<div className={styles.nav__link}>
					<a href={'#'}>Contact</a>
				</div>

			</nav>
		</div>
	);
};