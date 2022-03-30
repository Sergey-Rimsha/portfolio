import React from "react";
import styles from './Skills.module.css';
import {MySkills} from "../MySkills/MySkills";

export const Skills = (props) => {

	return (
		<div className={styles.skillsBlock}>
			<div className={props.styleContainer}>
				<div className={styles.contentWrap}>
					<h2 className={styles.title}>
						Мои скилы
					</h2>
					<div className={styles.mySkillsWrap}>
						<MySkills />
						<MySkills />
						<MySkills />
					</div>
				</div>
			</div>
		</div>
	)
}