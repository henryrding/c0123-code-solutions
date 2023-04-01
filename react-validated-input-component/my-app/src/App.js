import './App.css';
import ValidatedInput from './ValidatedInput';

const validationData = [
  {
    regex: /.{1,}/,
    error: 'A password is required.'
  },
  {
    regex: /.{8,}/,
    error: 'Your password is too short.'
  },
  {
    regex: /\d/,
    error: 'Your password must contain a digit.'
  },
  {
    regex: /[A-Z]/,
    error: 'Your password must contain a capital letter.'
  },
  {
    regex: /[!@#$%^&*()]/,
    error: 'Your password must contain a special character ( ! ,  @ ,  # ,  $ ,  % ,  ^ ,  & ,  * ,  ( , or  ) ).'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ValidatedInput data={validationData}/>
      </header>
    </div>
  );
}

export default App;
