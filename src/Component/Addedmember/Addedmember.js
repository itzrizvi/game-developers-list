import React from 'react';
// Importing CSS for this component
import './Addedmember.css';

const Addedmember = (props) => {
    // Destructuring
    const { addmember } = props;
    // Using Reducer for total Salary amount
    const salaryReducer = (previous, current) => previous + current.salary;
    const totalSalary = addmember.reduce(salaryReducer, 0);

    return (
        <div className="member-list">
            <h2>Total Summery</h2>
            <h3>Total Added: <span>{props.addmember.length} Member</span></h3>
            <h3>Total Cost: <span>${totalSalary}</span></h3>
            <h3>Member List:</h3>
            <ul id="list">
                {
                    // Using Map for list of names added
                    addmember.map(singlemember => <li key={singlemember.id}>
                        <img src={singlemember.img} alt="" />
                        {singlemember.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Addedmember;