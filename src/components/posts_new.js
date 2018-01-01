import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field){
        return (
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="jumbotron text-white bg-dark">
            <div className="container text-white center  ">
                <h1>Creat Todo</h1>
            </div>
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
           
               <Field 
                 label="Title for Post"
                 name="title" 
                 component={this.renderField}
                />
                <Field 
                 label="Date"
                 name="date" 
                 component={this.renderField}
                />
                <Field
                 label="Detail"
                 name="detail" 
                 component={this.renderField}
                 />
                 <button type="submit" className="btn btn-primary">Submit</button>
                 <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
           </div>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.date) {
        errors.date = "Enter a date";
    }
    if(!values.detail){
        errors.detail= "Enter some content";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (
    connect(null, { createPost }) (PostsNew)
);