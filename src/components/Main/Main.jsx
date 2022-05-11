import React from "react";
import styles from './Main.module.css'

export const Main = (props) => {

	return (
		<div className={styles.mainBlock}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<div className={styles.mainInfo}>
						<h1>
							I`m Sergey Rimsha
							<br/>
							<span>
								Frontend Developer.
							</span>
						</h1>
						<button>
							<a href='' download=''>download CV</a>
						</button>
					</div>
					<div className={styles.mainPhoto}>
						<img src='../../assets/ava_main.jpg' alt='photo'/>
					</div>
				</div>
			</div>
		</div>
	)
}