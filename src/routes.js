import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';


const NotFound= ()=>{
    return <div>404 PAGE NOT FOUND</div>;
}

export default(
<Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path='/posts/new' component={PostsNew} />
    <Route path='posts/:post_id' component={PostShow}/>
    <Route path='*' component={NotFound} />
</Route>
);