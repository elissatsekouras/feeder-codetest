import React from 'react';

class MenuItem extends React.Component {
   
    render() {
      const isSelected = this.props.currentId === this.props.id;
        return (
          <li className={isSelected ? 'darker' : ''} onClick={() => this.props.handleClick(this.props.id)} >{this.props.title}</li>
        );
      }
}

export default MenuItem;