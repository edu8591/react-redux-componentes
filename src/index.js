import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    const image = faker.image.avatar;
    
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this
            </ApprovalCard>
        
            {/* <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {faker.name.firstName()}
                    </a>

                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">
                        nice bLog post!
                    </div>
                </div>
            </div> 
            
            *this is too long so we should call the component CommentDetail instead*/}
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    blogPost="end of passion play" 
                    authorAvatar= {image()} 
                />{/*components are called within <> in JSX, 'as it is not JS we do not call within curly braces{}' */}
            </ApprovalCard>

            <ApprovalCard>       
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 3:20PM" 
                    blogPost="crumbling away" 
                    authorAvatar= {image()}  
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:30PM" 
                    blogPost="I'm your source of self-destruction" 
                    authorAvatar= {image()}  
                /> {/*each of these <CommentDetail /> creates a comment */}
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);

/**
 * IN ORDER TO MAKE A REUSABLE COMPONENT
 * we first must identify the code that is going to be repeated
 * 2) provide a name for the component
 * givee a miningfull and descriptive name
 * 3) create a new file tto house the component-it should have the same name as the component
 * 4)create a new compoeent inside the newly created file and paste the constantly repeating part into it
 * 5)make the new component configurable by using react's prop system
 * 
 * this is how we add props(properties)
 * <CommentDetail author(this is the name of the prop, i can choose the desired name)="sam"(this is the value of the prop, we calso reference a javascript variable if we use {}) /> 
*/