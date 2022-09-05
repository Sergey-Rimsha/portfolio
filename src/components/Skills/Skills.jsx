import React from 'react';

import styles from './Skills.module.scss';
import {MySkill} from './MySkills/MySkill';

export const Skills = (props) => {

	return (
		<div className={styles.skills}>
			<div className={props.styleContainer}>
				<div className={styles.content}>
					<div className={styles.skills__title}>
						<h2>
							Main Skills
						</h2>
					</div>
					<div className={styles.skills__wrap}>
						<MySkill />
						<MySkill />
						<MySkill />
						<MySkill />
						<MySkill />
						<MySkill />
					</div>
				</div>
			</div>
		</div>
	);
};