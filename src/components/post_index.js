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
        List of blog posts
        </div>
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