import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
