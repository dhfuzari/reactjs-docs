import React from 'react';

function Blog(props) {    
    const sidebar = (
        <div>
            <h3>Sidebar</h3>
            <ul>
                {props.posts.map((post) => 
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        </div>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>Content</h3>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );

    
}

export default Blog;