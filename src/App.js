import './App.css';
import Color from './components/Color';
import Counter from './components/Counter';
import Flowers from './components/Flowers';
import Form from './components/Form';
import Todos from './components/Todos';
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Color />
      <Counter />
      <Form />
      <Todos />
      <Flowers />
    </ThemeProvider>
  );
}

export default App;
