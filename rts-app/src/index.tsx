import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div className="">
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
