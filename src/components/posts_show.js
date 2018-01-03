import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    ComponentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const {id} = this.props.match.params;
        
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {post} = this.props;
        if(!post){
            return <div className="text-white">Loading...</div>;
        }
        return(
            <div className="center">
                  <div className="jumbotron text-white bg-dark">
                  <h3>{post.title}</h3>
               <h6>Date: {post.date}</h6>
               <p>{post.detail}</p>
             
               <Link className="btn btn-primary" to="/">Back to Index</Link> 
               <button className="btn btn-danger pull-xs-right"
                       onClick={this.onDeleteClick.bind(this)}>
                   Delete Post
               </button>
              
              </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return  { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
