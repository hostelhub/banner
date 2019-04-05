import React from 'react';
import SearchBar from './SearchBar.jsx';
import TopBar from './TopBar.jsx';
import SideBar from './SideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className='hostels'>
        <h1>Hello Banner</h1>
        <div className='top-bar'>
        <h1>This is the Top Bar</h1>
        <TopBar />
        </div>
        <div className='side-bar'>
        <h1>This is the SideBar</h1>
        <SideBar />
        </div>
        <div className='search-bar'>
        <h1>This is the Search Bar</h1>
        <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
