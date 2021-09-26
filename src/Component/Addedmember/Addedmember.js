import React from 'react';
import './Addedmember.css';

const Addedmember = (props) => {
    const { addmember } = props;

    const salaryReducer = (previous, current) => previous + current.salary;
    const totalSalary = addmember.reduce(salaryReducer, 0);


    return (
        <div className="member-list">
            <h2>Total Summery</h2>
            <h3>Total Added: {props.addmember.length} Members</h3>
            <h3>Total Cost: ${totalSalary}</h3>
            <h3>Member List:</h3>
            <ul id="list">
                {
                    addmember.map(singlemember => <li key={singlemember.age}>{singlemember.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Addedmember;