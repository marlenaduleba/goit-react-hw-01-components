import Container from './Container/Container';
import Box from './Box/Box';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


export const App = () => {
  return (
  <div>
  <Container>
    <Box>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    </Box>
    
    <Box>
      <Statistics
      title="Upload stats"
      stats={data}
      />
      <Statistics stats={data} />
    </Box>
    <Box>
      <FriendList friends={friends}/>
    </Box>
    <Box>
      <TransactionHistory items={transactions} />
    </Box>
  </Container>
  </div>
  );
};
