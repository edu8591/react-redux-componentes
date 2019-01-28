//react component are writen in camel case
//as components are classes they should start with caps
import React from 'react';
//import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.authorAvatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    {/*props is an object that has all the key value pairs passed in the parent component, in this case author is the key that contains the name of who placed the comment */}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                {props.blogPost}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;
//previous line is what makes this component available to import
//Props: system for passing data from a parent component to a child
//it communicates data from a parent to a child
//its goal is to customize the child 