import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme/Theme';
import Header from './Header.react'

function App() {
  return (
      <ThemeProvider theme={theme}r>
          <Header />
          Hello!
      </ThemeProvider>
  );
}

export default App;
