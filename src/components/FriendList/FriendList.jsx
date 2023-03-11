//import PropTypes from 'prop-types';
//import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = friends => {
  return (
    <ul classNameName="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
