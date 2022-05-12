import React from "react";
import styles from "./Project.module.scss";

export const Project = (props) => {

	return (
		<div className={styles.project}>
			<div style={props.style} className={styles.project__img}>
				<button className={styles.project__btn}>
					<a className={styles.project__link} href={props.socialLink} about={'project'}>{props.name}</a>	
				</button>
				
			</div>
			<div className={styles.info}>
				<div className={styles.info__subTitle}>{props.name}</div>
				<div className={styles.info__description}>
					description
				</div>
			</div>
		</div>
	)
}