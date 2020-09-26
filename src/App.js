import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fill-available;
`;

const Profile = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 250px;
`;

const App = () => (
  <div>
    <ProfileWrapper>
      <Profile src={process.env.PUBLIC_URL + '/img/profile.jpg'} />
    </ProfileWrapper>
  </div>
);

export default App;
