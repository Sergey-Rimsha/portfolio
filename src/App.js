import styles from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Footer} from "./components/Footer/Footer";
import { Contact } from './components/Contact/Contact';



function App() {

	const styleContainer = `${styles.container}`;

    return (
        <div className={styles.App}>
			<Header styleContainer={styleContainer}/>
	        <Main styleContainer={styleContainer}/>
	        <Skills styleContainer={styleContainer}/>
	        <Works styleContainer={styleContainer}/>
	        <Contact styleContainer={styleContainer}/>
	        <Footer styleContainer={styleContainer}/>
        </div>
    );
}

export default App;
