import { AppRouter } from './components/Router/AppRouter';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import Container from './components/common/Container/Container';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Container>
          <AppRouter />
        </Container>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
