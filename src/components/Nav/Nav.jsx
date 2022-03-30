import React from "react";
import styles from './Nav.module.css';


export const Nav = () => {
	return (
		<div className={styles.navWrap}>
			<nav className={styles.nav}>
				<a href={``}>Главная</a>
				<a href={``}>Скилы</a>
				<a href={``}>Работа</a>
				<a href={``}>Контакты</a>
			</nav>
		</div>
	)
}