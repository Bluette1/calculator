import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';

const App = () => (
  <div className="App">
    <ButtonGroups groups={buttonGroups()} id="button-groups" />
  </div>
);

export default App;
