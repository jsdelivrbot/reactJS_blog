import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{

  render(){
    return(
      <div>List of blog posts</div>
    );
  }

  componentWillMount(){
    console.log('working');
    this.props.fetchPosts();
  }

}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchPosts},dispatch);
// }

export default connect(null,{fetchPosts:fetchPosts})(PostsIndex);