import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import About from './component/aboutme/about';
import Skill from './component/skills/skill';
import Footer from './component/footer/footer';
function App() {
  return (
    
    <div className="App">
      <Header/>
      <About/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
