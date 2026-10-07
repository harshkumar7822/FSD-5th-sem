import React from 'react';
import ChildComponent from './childcomponent';

const App = () => {
    // const username = "gaurav";
    // const email = "gaurav@example.com";
    // const section = "cse-19";
    const user={
        username:"harsh",
        email:"harsh@example.com",
        section:"cse-19"
    };

    return (
        <div>
            <ChildComponent
                userName={user.username}
                email={user.email}
                section={user.section}
            />
        </div>
    );
};

export default App;