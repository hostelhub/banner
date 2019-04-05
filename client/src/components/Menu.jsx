import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>
          HELLO FROM MENU
        </h1>
        <i className='fas fa-user'></i>
        <button className="sign-in-btn"
        // onClick={this.handleUserOnClick.bind(this)}
        ><i className="fa fa-user"></i>User</button>

        <i className='fas fa-language'></i>
        <button className="language-btn"
         // onClick={this.handleLanguageOnClick.bind(this)}
        ><i className="fa fa-language"></i>EN</button>

        <i className='fas fa-search'></i>
        <button className="search-btn"
        // onClick={this.handleSearchOnClick.bind(this)}
        ><i className="fa fa-search"></i>Search</button>

        <i className='fas fa-sidebar'></i>
        <button className="sidebar-btn"
        // onClick={this.handleSidebarOnClick.bind(this)}
        ><i className="fa fa-sidebar"></i>=</button>
      </div>
    );
  }
}

export default Menu;
