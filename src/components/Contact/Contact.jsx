import React from 'react';

import styles from './Contact.module.scss';

export const Contact = (props) => {

	return (
		<div className={styles.contact}>
			<div className={props.styleContainer}>
				<div className={styles.content}>
					<div className={styles.contact__title}>
						<h2>
							Hire Me.
						</h2>
					</div>
					<form className={styles.form}>
						<input 
							className={styles.form__input}
							name={'name'} 
							type={'name'}
							placeholder={'Your Name *'} />

						<input 
							className={styles.form__input} 
							name={'email'} 
							type={'email'} 
							placeholder={'Your Email *'} />
						
						<textarea 
							className={styles.form__textarea}
							name={'message'} 
							placeholder={'Your Message *'}
						>
						</textarea>
						
						<button 
							className={styles.form__btn} 
							type='submit' >
								submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};