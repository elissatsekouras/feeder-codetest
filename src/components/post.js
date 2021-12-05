import React from 'react';


class Post extends React.Component {
    render() {
        // Only the first sentence of the content 
        const content = this.props.post.content_html;
        const firstSentence = content.split(/\.|。/).slice(0,1);

        // Formatting date
        const date = new Date(this.props.post.date_published);
        const options = { hour: '2-digit', minute: '2-digit' };
        const betterDate = date.toLocaleTimeString(undefined, options);


        return (
            <div className="post-outer">
                <a href={this.props.post.url} target='_blank' >
                    {this.props.post.image &&
                    <div className="post-img-container" >
                         <img alt={this.props.post.title} src={this.props.post.image}/> 
                    </div>}
                    <div className={this.props.post.image ? "text-container" : "text-wrapper"}>
                        <div className="source-date-box" >
                            <p>{this.props.post._feeder.source}</p>
                            <p>{betterDate}</p>
                        </div>
                        <h2 className={this.props.post.title.startsWith('http') ? 'line-break' : ''} >{this.props.post.title}</h2>
                        { /* I'm assuming that the data from the api is sanitised */ }
                        <div dangerouslySetInnerHTML={{__html: firstSentence}}/>
                    </div>  
                </a>
            </div>
        )
    }
}


export default Post;