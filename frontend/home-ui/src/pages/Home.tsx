//import { useTranslation } from 'react-i18next';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  //const { t, i18n } = useTranslation();
  //{t('welcome_message')}
  return (
    <div className="App-header">
              <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Who is Clicking</h1>
                    <p className="fs-5">Who is clicking is a simple yet powerful set of tools aimed to identify a person with the help of recon scripts executed when someone clicks a link.</p>
                    <a className="btn btn-primary" href="#!">Sign Up!</a>
                </div>
            </div>
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body">
                    <p className="text-white m-0">
                        Does someone bother you behind the "anonymity of the internet"? This tool aims to help people to identify who is behind the monitor on the other side without any technical knowledge. Just share a link with the person you want to identify, and we will do the rest.                    
                    </p>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100 bg-dark">
                        <div className="card-body">
                            <h2 className="card-title">Step 1 - Creation</h2>
                            <p className="card-text">Create an account or a pair of links in <Link as={Link} to={'/link'}>Links</Link>.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 bg-dark">
                        <div className="card-body">
                            <h2 className="card-title">Step 2 - Social Engineering</h2>
                            <p className="card-text">Share your "Pray Link" with the person you want to identify, you can just copy and paste it in any chat or place, all the people that clicks it will became your pray.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 bg-dark">
                        <div className="card-body">
                            <h2 className="card-title">Step 3 - Identification</h2>
                            <p className="card-text">Login in your account or use your "Hunter Link" to see all the information of those who have clicked the link.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>
  );
};

export default Home;
