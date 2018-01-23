import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import { Link } from 'react-router/lib';

class PostShow extends Component{

    componentWillMount(){
        this.props.fetchPost(this.props.params.post_id);
    }

    render(){

        const {post} = this.props;

        if(!post)
        {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to={`/`}>Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        post:state.posts.post
    };
}

export default connect(mapStateToProps,{fetchPost})(PostShow);