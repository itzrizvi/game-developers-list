import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
    const listIcon = <FontAwesomeIcon icon={faList} />
    const { name, age, post, technology, img, salary, country } = props.member;

    return (
        <div className="member-grid">
            <div className="member-img">
                <img src={img} alt="Team Member" />
            </div>
            <div className="member-details">
                <h3>Name: {name}</h3>
                <h2>Age: {age}</h2>
                <h2>Post: {post}</h2>
                <h2>Technology: {technology}</h2>
                <h2>Salary: ${salary}</h2>
                <h2>Country: {country}</h2>
                <button className="add-list-btn" onClick={() => props.handleAddMember(props.member)}>{listIcon} Add To List</button>
            </div>

        </div>
    );
};

export default Member;