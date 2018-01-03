import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import '../styles/index.css';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
               <div className="" >
               <div className="col-md-11 centerr ">
                <div className="card text-white bg-dark mb-3">
                <div className="card-body ">
                <h5 className="card-title" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </h5> 
                </div>
                </div>
                </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="jumbotron text-white bg-dark center">
                <h1 className="center">Post List</h1>
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <div>
                    {this.renderPosts()}
                </div>
                </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);
