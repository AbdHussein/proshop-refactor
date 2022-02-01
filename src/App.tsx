import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Suspense, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { AllRoutes } from './Route/AllRouter';
import { Container, Navbar } from './components';
import ErrorBoundary from './components/ErrorBoundary';
import Burger from './components/Navbar/Burger';
import { SpinnerContainer } from './components/SpinnerContainer';
import { AppState } from './redux/store';
import { darkTheme, GlobalStyle, lightTheme } from './theme';

const stripePromise = loadStripe('pk_test_kvaWWuoOUKU8FfTgtn5U2LVC00If7nyUo0');

const App: React.FC = () => {
  const [open, setstate] = useState(false);
  const { theme } = useSelector((state: AppState) => state);
  return (
    <Elements stripe={stripePromise}>
      <HelmetProvider>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Suspense fallback={<SpinnerContainer />}>
            <ErrorBoundary>
              <Navbar open={open} />
              <Routes>
                {AllRoutes.map((route, Index) => (
                  <Route
                    path={route.path}
                    element={route.component}
                    key={Index}
                  />
                ))}
              </Routes>
            </ErrorBoundary>
          </Suspense>{' '}
        </ThemeProvider>
      </HelmetProvider>
    </Elements>
  );
};

export default App;
