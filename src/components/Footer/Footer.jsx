import React from "react";
import styles from './Footer.module.css';

export const Footer = (props) => {

	return (
		<div className={styles.footer}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<h2 className={styles.title}>
						Сергей Римша
					</h2>
					<div className={styles.socialWrapIcon}>
						<div className={styles.socialIcon}></div>
						<div className={styles.socialIcon}></div>
						<div className={styles.socialIcon}></div>
						<div className={styles.socialIcon}></div>

					</div>
					<div className={styles.description}>
						2022 Все права защищены
					</div>
				</div>
			</div>
		</div>
	)
}