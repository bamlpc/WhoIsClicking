import useRefreshToken from '../../hooks/useRefreshToken';
import SplitScreen from '../../Layout/base';
import logout from '../logout';

const LeftHandComponent = () => {
  const refresh = useRefreshToken();
  return (
    <h1 style={{ backgroundColor: 'red' }}>
      Left!
      <br />
      <button onClick={() => refresh}>Refresh</button>
    </h1>
  );
};

const RightHandComponent = () => {
  const logout_button = logout();
  return (
    <h1 style={{ backgroundColor: 'green' }}>
      Right!
      <br />
      <button onClick={() => logout_button}>LogOut</button>
    </h1>
  );
};

const Dashboard = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
};

export default Dashboard;
