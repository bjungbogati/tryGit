import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ author, profile }) => (
    <footer>
        Made with <i className="em em-heart" style={{width: '15px', height: '15px'}}></i>
        <a href="https://bjungbogati.com.np">{' @'+author}</a>
    </footer>
)

export default Footer
