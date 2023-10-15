// import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Features from './components/Features';
import Tools from './components/Tools';
import News from './components/News';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
	return (
		<ThemeProvider theme={theme}>
      {/* <NavBar/> */}
			<Heading />
			<Features />
			<Tools />
			<News />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
