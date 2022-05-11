import React from "react";
import styles from './Nav.module.css';


export const Nav = () => {
	return (
		<div className={styles.navWrap}>
			<nav className={styles.nav}>
				<div className={styles.nav__link}>
					<a href={``}>Главная</a>
				</div>
				<div className={styles.nav__link}>
					<a href={``}>Скилы</a>
				</div>
				<div className={styles.nav__link}>
					<a href={``}>Работа</a>
				</div>
				<div className={styles.nav__link}>
					<a href={``}>Контакты</a>
				</div>

			</nav>
		</div>
	)
}