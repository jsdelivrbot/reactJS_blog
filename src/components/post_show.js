import React , {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost , deletePost} from '../actions/index';
import { Link } from 'react-router/lib';

class PostShow extends Component{

    static contextTypes={
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.post_id);
    }

    onDelete(){
        this.props.deletePost(this.props.params.post_id).then(()=>{
            this.context.router.push('/');
        });
    }

    render(){

        const {post} = this.props;

        if(!post|| post.id!=this.props.params.post_id)
        {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to={`/`}>Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button className={`btn btn-danger pull-xs-right`}
                onClick={this.onDelete.bind(this)}>Delete Post</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        post:state.posts.post
    };
}

export default connect(mapStateToProps,{fetchPost, deletePost})(PostShow);