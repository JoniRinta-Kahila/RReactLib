import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './Navbar';
import logo from '../../assets/logo.png';

const menuCenter = (
  <ul
    style={{
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      color: '#fff',
      fontWeight: 700,
      fontSize: '20px',
    }}
  >
    <li style={{ margin: '0 8px' }}>kek</li>
    <li style={{ margin: '0 8px' }}>foo</li>
    <li style={{ margin: '0 8px' }}>bar</li>
  </ul>
);

const filler = (
  <>
    <div style={{ height: '100px', background: 'lightblue', marginTop: '93px' }} />
    <div style={{ height: '100px', background: 'lightpink', marginTop: '93px' }} />
    <div style={{ height: '100px', background: 'lightblue', marginTop: '93px' }} />
    <div style={{ height: '100px', background: 'lightpink', marginTop: '93px' }} />
    <div style={{ height: '100px', background: 'lightblue', marginTop: '93px' }} />
    <div style={{ height: '100px', background: 'lightpink', marginTop: '93px' }} />
  </>
);

storiesOf('Navbar', module)
  .add('default', () => <Navbar />)
  .add('noScroll', () => (
    <>
      <Navbar
        menuRendererCenter={menuCenter}
        menuRendererEnd={menuCenter}
        hamburgerMenuRenderer={menuCenter}
        logoSrc={logo}
      />
      {filler}
      {filler}
    </>
  ))
  .add('scroll', () => (
    <>
      <Navbar
        menuRendererCenter={menuCenter}
        menuRendererEnd={menuCenter}
        hamburgerMenuRenderer={menuCenter}
        logoSrc={logo}
        hideNavbarOnScroll
      />
      {filler}
      {filler}
    </>
  ));
