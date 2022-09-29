import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div className='question'>
                            <h4>How does React work?</h4>
                            <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
           </div>
            <div className='question'>
                            <h4>What are the differences between props and state?</h4>
                            <p>PROPS: The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.</p>
                            <p>STATE: The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.</p>
           </div>
            <div className='question'>
                            <h4>what can we do with useEffect other than loading data in react?</h4>
                            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
           </div>
        </div>
    );
};

export default Question;