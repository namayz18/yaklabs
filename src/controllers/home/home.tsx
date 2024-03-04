import React from 'react';
import logo from '../../../assets/images/logo.png';
import background from '../../../assets/images/background.png';
import { Service } from '../../components/service';
import { Work } from '../../components/work';

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <div
          style={{
            padding: '20px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={logo}
            style={{ height: 40, width: 200, objectFit: 'cover' }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h4 style={{ margin: '0px 20px' }}>About us</h4>
            <h4 style={{ margin: '0px 20px' }}>What We Do Best</h4>
            <h4 style={{ margin: '0px 20px' }}>Our Works</h4>
            <h4 style={{ margin: '0px 20px' }}>Team</h4>
            <h4 style={{ margin: '0px 20px' }}>Contact us</h4>
          </div>
        </div>
        <div className='container'>
          <h1 style={{ width: 500 }}>Plugging great ideas into your brand.</h1>
          <h6 style={{ width: 500 }}>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer
          </h6>
          <button className='button'>Get started</button>
        </div>
        <h2 style={{ marginTop: '40px' }}>About us</h2>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}
        >
          <p style={{ width: '50%' }}>
            Yak Labs is a Melbourne-based iPhone app, Android app, and web app
            development company. Our local designers and app developers work
            with Startup founders and Business executives to create quality apps
            with reliable technology and flawless design.
          </p>
        </div>
        <Service />
        <h2 style={{ margin: '40px 0px' }}>Our works</h2>
        <Work />
      </div>
    </>
  );
};
