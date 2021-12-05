import React from 'react';
import Post from './post';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            loading: true
        };
    }
    componentDidMount() {
        const currentEndpoint = this.props.topics[this.props.currentId].endpoint
        this.setState({loading: true});
        fetch(currentEndpoint)
            .then(response => response.json())
            .then(data => this.setState({ posts: data.items, loading: false }));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentId !== this.props.currentId) {
            const currentEndpoint = this.props.topics[this.props.currentId].endpoint
            this.setState({loading: true})
            fetch(currentEndpoint)
                .then(response => response.json())
                .then(data => this.setState({ posts: data.items, loading: false })); 
        }
    }
    render() {
        const postData = this.state.loading ? 'loading...' : this.state.posts.map(post => <Post key={post.id} post={post} />);
        return (
            <div className="postlist-container">
                {postData}
            </div>   
        )
    }
}


export default PostList;