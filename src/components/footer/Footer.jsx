import React from 'react'
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id='footer'>
      <a href="#" className='footer__logo'>Hemant Jangid</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/hemant-jangid-9a4b93255/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/hemantjangid-001" rel="noreferrer" target='_blank'><BsGithub/></a>
      <a href="https://www.instagram.com/itz.he.mn.t/" rel="noreferrer" target='_blank'><FaInstagram /></a>
      <a href="mailto:jangid.h4004@gmail.com" rel="noreferrer" target='_blank'><FiMail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hemant Jangid. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer
