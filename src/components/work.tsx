import React from 'react';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';

export const Work: React.FC = () => {
  return (
    <div style={{ display: 'flex', margin: '20px 60px' }}>
      <div
        style={{
          margin: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <img
          src={project1}
          style={{
            width: '100%',
            height: 500,
            objectFit: 'cover',
          }}
        />
        <h4
          style={{
            margin: '20px 0',
          }}
        >
          UI/UX
        </h4>
      </div>
      <div
        style={{
          margin: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <img
          src={project2}
          style={{
            width: '100%',
            height: 500,
            objectFit: 'cover',
          }}
        />
        <h4
          style={{
            margin: '20px 0',
          }}
        >
          App Development
        </h4>
      </div>
      <div
        style={{
          margin: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <img
          src={project3}
          style={{
            width: '100%',
            height: 500,
            objectFit: 'cover',
          }}
        />
        <h4
          style={{
            margin: '20px 0',
          }}
        >
          Web design
        </h4>
      </div>
    </div>
  );
};
