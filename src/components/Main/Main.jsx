import React from 'react';

import photo from '../../assets/ava_main.jpg';

import styles from './Main.module.scss';


export const Main = (props) => {

	return (
		<div className={styles.main}>
			<div className={props.styleContainer}>
				<div className={styles.content}>
					<div className={styles.main__info}>
						<h1 className={styles.main__title}>
							I`m Sergey Rimsha
							<br/>
							<span>
								Frontend Developer.
							</span>
						</h1>
						<button className={styles.main__button}>
							<a href='' download=''>download CV</a>
						</button>
					</div>
					<div className={styles.main__photo}>
						<img name='photo' src={photo} alt='photo'/>
					</div>
				</div>
			</div>
		</div>
	);
};