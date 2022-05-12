import React from "react";
import styles from './Footer.module.scss';

export const Footer = (props) => {

	return (
		<div className={styles.footer}>
			<div className={props.styleContainer}>
				<div className={styles.content}>
					<div className={styles.footer__title}>
						<h2>
							Сергей Римша
						</h2>
					</div>
					<div className={styles.socials}>
						<div className={styles.socials__item}></div>
						<div className={styles.socials__item}></div>
						<div className={styles.socials__item}></div>
						<div className={styles.socials__item}></div>
					</div>
					<div className={styles.footer__description}>
						2022 Все права защищены
					</div>
				</div>
			</div>
		</div>
	)
}