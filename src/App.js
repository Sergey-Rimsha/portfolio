import styles from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {ContactBlock} from "./components/ContactBlock/ContactBlock";
import {Footer} from "./components/Footer/Footer";



function App() {

	const styleContainer = `${styles.container}`;

    return (
        <div className={styles.App}>
			<Header styleContainer={styleContainer}/>
	        <Main styleContainer={styleContainer}/>
	        <Skills styleContainer={styleContainer}/>
	        <Works styleContainer={styleContainer}/>
	        <ContactBlock styleContainer={styleContainer}/>
	        <Footer styleContainer={styleContainer}/>
        </div>
    );
}

export default App;
