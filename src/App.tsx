import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AppRoutes } from './routes/AppRoutes';
import { BooksProvider } from './context/BooksContext';

export const App = () => (
  <BrowserRouter>
    <BooksProvider>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BooksProvider>
  </BrowserRouter>
);
