import React from "react";
import styles from './Header.module.scss';
import {Nav} from "../Nav/Nav";


export const Header = (props) => {

	return (
		<header className={styles.header}>
			<div className={props.styleContainer}>
				<Nav/>
			</div>
		</header>
	)
}