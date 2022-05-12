import React from "react";
import styles from './Works.module.scss';
import {Project} from "./Project/Project";

import social from './../../assets/socialNetwork.jpg';
import todolist from './../../assets/todolist.jpg';


export const Works = (props) => {

	const socialImg = {
		backgroundImage: `url('${social}')`,
	};

	const todolistImg = {
		backgroundImage: `url('${todolist}')`,
	};

	const socialLink = 'https://github.com/Sergey-Rimsha/SocialNetworkIncubator';
	const todoListLink = 'https://github.com/Sergey-Rimsha/todoList';

	return (
		<div className={styles.works}>
			<div className={props.styleContainer}>
				<div className={styles.content}>
					<div className={styles.works__title}>
						<h2>
							Мои работы
						</h2>
					</div>
					<div className={styles.works__wrap}>
						<Project
							name={`sicial network`} 
							style={socialImg} 
							socialLink={socialLink}/>
						<Project 
							name={`todolist`} 
							style={todolistImg} 
							socialLink={todoListLink}/>
					</div>
				</div>
			</div>
		</div>
	)
}