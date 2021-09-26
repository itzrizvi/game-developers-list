import React, { useEffect, useState } from 'react';
import Addedmember from '../Addedmember/Addedmember';
import Member from '../Member/Member';
import './Team.css';

const Team = () => {
    const [teammembers, setTeammembers] = useState([]);
    const [addmember, setAddmember] = useState([]);
    useEffect(() => {
        fetch('./devteam.json')
            .then(res => res.json())
            .then(data => setTeammembers(data));
    }, []);

    const handleAddMembers = (member) => {
        const newMember = [...addmember, member];
        setAddmember(newMember);

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="grid-container">
                            {
                                teammembers.map(teammember => <Member
                                    key={teammember.id}
                                    handleAddMember={handleAddMembers}
                                    member={teammember}></Member>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="addedmember-list">
                            <Addedmember addmember={addmember}></Addedmember>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;