import React from 'react';

export const Service: React.FC = () => {
  return (
    <div
      style={{
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>What We Do Best</h2>
      <div
        style={{
          display: 'flex',
          width: '80%',
        }}
      >
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/webapp.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              Web App Development
            </h4>
          </div>
          <h6>
            Transform your ideas into reality with our web app development
            services. With an expert team & modern technologies, we assure you
            an end-to-end product for your unique needs.
          </h6>
        </div>
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/mobile-app.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              Mobile App Development
            </h4>
          </div>
          <h6>
            With mobile applications built in technologies like React Native and
            Flutter, unleash the full potential of your business.
          </h6>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '80%',
        }}
      >
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/design.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              UI/UX Design
            </h4>
          </div>
          <h6>
            Unique designs for your product, guaranteed to be user-centric and a
            visual treat!
          </h6>
        </div>
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/full-stack.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              Full Stack Development
            </h4>
          </div>

          <h6>
            Our full-stack approach handles both front-end and back-end for a
            complete product solution.
          </h6>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '80%',
        }}
      >
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/quality-assurance.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              Quality Assurance
            </h4>
          </div>

          <h6>
            No compromise on the most important thing - the 'quality' of what we
            deliver. Exceeding your expectations is in our DNA.
          </h6>
        </div>
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: '20px',
            width: '100%',
            textAlign: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              paddingBottom: '10px',
            }}
          >
            <img src='https://geekyants.com/images/services/new/business.svg' />
            <h4
              style={{
                paddingLeft: '10px',
              }}
            >
              Business Analysis
            </h4>
          </div>

          <h6>
            We discover, study and document business needs in collaboration with
            stakeholders and propose foolproof solutions that fit like a glove.
          </h6>
        </div>
      </div>
    </div>
  );
};
