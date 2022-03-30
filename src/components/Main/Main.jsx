import React from "react";
import styles from './Main.module.css'

export const Main = (props) => {

	return (
		<div className={styles.mainBlock}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<div className={styles.mainInfo}>
						<h1>Привет!</h1>
						<div>Меня зовут Сергей</div>
						<span>Я Frontend Developers</span>
					</div>
					<div className={styles.mainPhoto}>
						<img src={''} alt={'photo'}/>
					</div>
				</div>
			</div>
		</div>
	)
}