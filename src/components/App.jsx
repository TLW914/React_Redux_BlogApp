import React from 'react';
import PostList from './PostList.jsx'

const App = () => {
    return (
        <div className="ui container">
            <PostList/>
        </div>
    );
}

export default App;

//DATA LODAING WITH REDUX
// Component gets rendered onto the screen
// Components 'componentDidMount' lifecycle method gets called
// Call action rcreator from 'componentDidMount'
// Action creator runs code to make an API request
// API responds with data
// Action creator returns an 'action' with the fetched data on the 'payload' property of action object
// Some reducer sees the action, returns the data off the 'payload'
// Generates a new state object, which causes redux/react-redux to render React app
