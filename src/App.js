import React from 'react';
import PostList from './components/postList';
import Menu from './components/menu'
import topics from './components/newsTopics'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newsTopics: topics,
      currentId: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    this.setState({
      currentId: id
    })
  }
  render() {
    return (
      <div className="content-wrapper"> 
        <div className="header">
          <div className="content-wrapper">
            <div className="title-container">
              <h1>Discover</h1>
              <h3>News from all over the world</h3>
            </div>
            <Menu handleClick={this.handleClick} topics={this.state.newsTopics} currentId={this.state.currentId}/>
          </div>
        </div>
        <PostList currentId={this.state.currentId} topics={this.state.newsTopics}/>
      </div> 
    );
  }
}

export default App;
