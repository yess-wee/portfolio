import Main from './components/Main';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';

function App() {

  return (
    <BackgroundView>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
        <Navbar />
        <Main />
        <Projects />
        <Contact />
      </div>
    </BackgroundView>
  )
}

export default App