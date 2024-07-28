import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const CreditScoreChecker = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To accurately check your rate, please provide your social security number and credit score</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Social Security Number"
            style={{ marginRight: '10px', padding: '10px', fontSize: '16px' }}
          />
          <input
            type="text"
            placeholder="Credit Score"
            style={{ padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <i className="fas fa-info-circle" style={{ marginRight: '5px' }}></i>
          We need this information to provide an accurate rate.
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'lightgreen',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Get Your Rate
        </button>
        <div style={{ marginTop: '20px' }}>
          <i className="fas fa-info-circle" style={{ marginRight: '5px' }}></i>
          Checking your rate won't affect your credit score!
        </div>
      </form>
    </div>
  );
};

export default CreditScoreChecker;
