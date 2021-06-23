import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            href="https://www.instagram.com/thesoulfrost/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFAOx2wRuWGHYNYpOTKc3_A"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-youtube-play" />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-shankar-pradhan-584b761aa/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://www.behance.net/parthpradhan1" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-behance" />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Website by{' '}
          <a
            href="https://github.com/parthpradhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parth Pradhan
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
