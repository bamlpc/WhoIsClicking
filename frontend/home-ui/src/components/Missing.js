import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className="app">
      <header className="App-header">
        <article style={{ padding: '100px' }}>
          <h1>Oops!</h1>
          <p>Page Not Found</p>
          <div className="flexGrow">
            <Link to="/">Visit Our Homepage</Link>
          </div>
        </article>
      </header>
    </div>
  );
};

export default Missing;
