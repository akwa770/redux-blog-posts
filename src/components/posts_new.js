import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" {...field.input}/>
            </div>
        );
    }
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
            </div>
        );
    }
    onSubmit(values) {
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });
        

    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField}/>
                <Field label="Categories" name="tags" component={this.renderField}/>
                <Field label="Post Content" name="content" component={this.renderField}/>
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>

            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    return errors;
}

export default reduxForm({validate, form: 'newPostForm'})
(
    connect(null, {createPost})(PostsNew)
);
