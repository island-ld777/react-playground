import PropTypes from 'prop-types';
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    return (
        <div id="user-profile">
            <h2>User Profile</h2>
            <UserUsername username={props.username}/>
            <b>Age: </b><span>{props.age}</span>
            <ul>
                <li>
                    <span>Spam</span>
                </li>
                <li>
                    <span>Sword</span>
                </li>
                <li>
                    <span>Magic Staff</span>
                </li>
            </ul>
        </div>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};