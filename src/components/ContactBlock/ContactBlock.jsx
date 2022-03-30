import React from "react";
import styles from './ContactBlock.module.css';

export const ContactBlock = (props) => {

	return (
		<div className={styles.contactBlock}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<h2 className={styles.title}>Контакты</h2>
					<form className={styles.form}>
						<input className={styles.formInput} />
						<input className={styles.formInput} />
						<textarea className={styles.formTextarea}>

						</textarea>
					</form>
				</div>
			</div>
		</div>
	)
}