import React from 'react';
import MenuItem from './menuItem'

class Menu extends React.Component {
    render() {
        const currentId = this.props.currentId;
        const menuItems = this.props.topics.map(item => <MenuItem currentId={currentId} title={item.title} id={item.id} handleClick={this.props.handleClick} key={item.id} />);
        return (
          <ul className="menu" >
              {menuItems}
          </ul>
        );
      }
}

export default Menu;