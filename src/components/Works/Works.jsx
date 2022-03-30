import React from "react";
import styles from './Works.module.css';
import {MyWorks} from "../MyWorks/MyWorks";


export const Works = (props) => {

	return (
		<div className={styles.worksBlock}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<h2 className={styles.title}>
						Мои работы
					</h2>
					<div className={styles.myWorksWrap}>
						<MyWorks />
						<MyWorks />
					</div>
				</div>
			</div>
		</div>
	)
}