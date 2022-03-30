import React from "react";
import styles from "./MyWorks.module.css";

export const MyWorks = () => {

	return (
		<div className={styles.myWorks}>
			<div className={styles.project}>
				<a className={styles.projectBtn} href={''} about={'project'}>project</a>
			</div>
			<div className={styles.projectInfo}>
				<div className={styles.subTitle}>project_Name</div>
				<div className={styles.description}>
					description
				</div>
			</div>
		</div>
	)
}