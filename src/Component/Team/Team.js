// Using Hooks
import React, { useEffect, useState } from 'react';
// Importing Components and CSS
import Addedmember from '../Addedmember/Addedmember';
import Member from '../Member/Member';
import './Team.css';

const Team = () => {
    // useState Hook Declaration
    const [teammembers, setTeammembers] = useState([]);
    const [addmember, setAddmember] = useState([]);
    // Fetch data by useEffect
    useEffect(() => {
        fetch('./devteam.json')
            .then(res => res.json())
            .then(data => setTeammembers(data));
    }, []);

    // Creating New Array for passing data as array
    const handleAddMembers = (member) => {
        // Condition for Duplicate Data
        if (addmember.indexOf(member) === -1) {
            const newMember = [...addmember, member];
            setAddmember(newMember);
        } else {
            alert('You Have Already Added This Person!!');
        }
    }
    return (
        <div className="main-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 col-sm-8 col-12">
                        <div className="grid-container">
                            {
                                // Doing Map for passing values to component
                                teammembers.map(teammember => <Member
                                    key={teammember.id}
                                    handleAddMember={handleAddMembers}
                                    member={teammember}></Member>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-12">
                        <div className="addedmember-list">
                            <Addedmember addmember={addmember}></Addedmember>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;