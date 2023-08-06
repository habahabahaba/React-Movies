import React from 'react';

export default function Footer() {
  return (
    <footer className='page-footer #bcaaa4 brown lighten-1'>
      <div className='footer-copyright #795548 brown'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright
          <a className='grey-text text-lighten-4 right' href='#!'>
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
