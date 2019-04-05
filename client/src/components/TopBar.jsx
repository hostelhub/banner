import React from 'react';
import Hostel from './Hostel.jsx';
import Menu from './Menu.jsx';
import Banner from './Banner.jsx';


class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>
          HELLO FROM TOP BAR
          <Hostel />
          <Menu />
          <Banner />
        </h1>
      </div>
    );
  }
}

export default TopBar;
