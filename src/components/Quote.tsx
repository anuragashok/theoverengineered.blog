import React from 'react';

const Quote: React.FC = ({ children }) => {
  return (
    <div>
      <blockquote>{children}</blockquote>

      <style jsx>{`
        div :global(blockquote) {
          margin: 50px auto;
          font-style: italic;
          padding: 15px;
          padding-left: 30px;
          border-left: 8px solid #3f51b5;
          position: relative;
          background: #ededed;
        }

        div :global(blockquote::before) {
          color: #3f51b5;
          font-size: 4em;
          position: absolute;
          left: 10px;
          top: -10px;
          content: ${`"\\201C"`};
        }

        div :global(blockquote::after) {
          content: '';
        }
        div :global(p) {
          margin-bottom: 0.1em;
        }
      `}</style>
    </div>
  );
};

export default Quote;
