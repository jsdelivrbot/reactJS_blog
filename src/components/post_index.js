import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{

  render(){
    return(
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>ADD NEW POST</Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>{this.renderPost()}</ul>
        </div>
    );
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPost(){
    return this.props.posts.map((post)=>{
        return (
        <li className='list-group-item' key={post.id}>
          <strong>{post.title}</strong>
          <span className='pull-xs-right'>{post.categories}</span>
        </li>
        );
    });
  }

}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts},dispatch);
// }

function mapStateToProps(state){
  return {posts: state.posts.all};
}

export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostsIndex);