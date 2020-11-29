import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import Display from './Display';

const App = () => (
  <div className="App">
    <Display />
    <ButtonGroups groups={buttonGroups()} />
  </div>
);

export default App;
