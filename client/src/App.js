import './App.css';
import { ProjectList } from './components/ProjectList/projectList';
import { Navigation } from './components/Navigation/navigation';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <ProjectList />
      </main>
      <footer>

      </footer>
    </>


  );
}

export default App;
