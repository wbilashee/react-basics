import './App.scss';
import Color from './components/Color';
import Counter from './components/Counter';
import Flowers from './components/Flowers';
import Form from './components/Form';
import Todos from './components/Todos';
import Users from './components/Users';
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
      <Users />
      <Flowers />
    </ThemeProvider>
  );
}

export default App;
