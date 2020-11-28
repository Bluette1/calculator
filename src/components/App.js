import '../App.css';
import ButtonPanel from './ButtonPanel';
import buttonGroups from '../helpers/buttonGroups';

const App = () => (
  <div className="App">
    {buttonGroups().forEach(btnPanel => (
      <ButtonPanel itemList={btnPanel.itemList} id={btnPanel.key} />
    ))}
  </div>
);

export default App;
