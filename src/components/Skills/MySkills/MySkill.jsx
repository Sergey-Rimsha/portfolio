import React from "react";
import styles from './MySkill.module.scss';

export const MySkill = () => {

	return (
		<div className={styles.skill}>
			<div className={styles.skill__logo}>
				logo
			</div>
			<h4 className={styles.skill__subTitle}>
				React
			</h4>
			<div className={styles.skill__description}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio eum ex
			</div>
		</div>
	)
}