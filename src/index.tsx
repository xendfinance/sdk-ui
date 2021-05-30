import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './theme/globalStyles';
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);