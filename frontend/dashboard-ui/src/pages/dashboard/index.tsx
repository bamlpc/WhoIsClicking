import SplitScreen from '../../Layout/base';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'red' }}>Left!</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Right!</h1>;
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
