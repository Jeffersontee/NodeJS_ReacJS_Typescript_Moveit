import { Button } from './components/Button'
import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css'


function App() {
  return (
    <div className="container">
        <ExperienceBar />
        <Button color="red">
          Botao 1
        </Button>
        <Button color="blue">
          Botão 2
        </Button>
        <Button color="green">
          Botão 3
        </Button>
        
    </div>
    
  );
}

export default App;
