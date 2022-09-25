import './App.css';
import MainBoard from './components/MainBoard';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className="flex">
     <SideBar />
     <MainBoard />
    </div>
  );
};
export default App;

