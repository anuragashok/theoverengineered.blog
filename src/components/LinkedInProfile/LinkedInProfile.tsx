import React, { useEffect } from 'react';

const LinkedInProfile: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <style jsx>{`
        div :global(.LI-badge-container-horizontal-light) {
          width: 100% !important;
        }
      `}</style>
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="large"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="light"
        data-vanity="anurag-ashok"
      >
        <a className="LI-simple-link" href="https://sg.linkedin.com/in/anurag-ashok?trk=profile-badge">
          Anurag Ashok
        </a>
      </div>
    </div>
  );
};

export default LinkedInProfile;
