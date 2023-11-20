import './App.scss';
import Routes from './routes/Routes';
import { Container } from './utils/Utils';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}

export default App;
