import React from 'react';

export default function Header() {
  return (
    <nav className='#795548 brown'>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          React Movies App
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#'>Repository</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
