import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Root from './root';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
