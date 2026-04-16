import React, { useState } from 'react';
import { Heart, Gift, Coffee } from 'lucide-react';
import './Donate.css';

const Donate = () => {
  const [showMomo, setShowMomo] = useState(false);
  const [network, setNetwork] = useState('MTN');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('500');
  const [selectedTier, setSelectedTier] = useState(500);

  const handleTierSelect = (tier) => {
    setSelectedTier(tier);
    if (tier !== 'custom') {
      setAmount(tier.toString());
    } else {
      setAmount('');
    }
  };

  const handleMomoSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 9) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    alert(`Payment prompt for GH₵${amount} sent to ${phone} on ${network}! Please check your phone to confirm the donation.`);
    setShowMomo(false);
    setPhone('');
  };

  return (
    <section id="donate" className="section donate-section">
      <div className="container">
        <div className="donate-wrapper glass-panel">
          <div className="donate-content">
            <h2 className="donate-title">Make a <span className="text-gradient-gold">Difference</span> Today</h2>
            <p className="donate-subtitle">
              Your contribution helps us stand in the gap for more youth. Together, we can enable young people to become productive and successful.
            </p>
            
            <div className="donation-options">
              <button 
                className={`donate-tier glass-panel ${selectedTier === 100 ? 'featured' : ''}`}
                onClick={() => handleTierSelect(100)}
              >
                <Coffee className="tier-icon" />
                <div className="tier-info">
                  <h4>GH₵ 100</h4>
                  <p>Provides learning materials for one student</p>
                </div>
              </button>
              
              <button 
                className={`donate-tier glass-panel ${selectedTier === 500 ? 'featured' : ''}`}
                onClick={() => handleTierSelect(500)}
              >
                <Heart className="tier-icon" />
                <div className="tier-info">
                  <h4>GH₵ 500</h4>
                  <p>Sponsors a student's project for a month</p>
                </div>
              </button>
              
              <button 
                className={`donate-tier glass-panel ${selectedTier === 'custom' ? 'featured' : ''}`}
                onClick={() => handleTierSelect('custom')}
              >
                <Gift className="tier-icon" />
                <div className="tier-info">
                  <h4>Custom Amount</h4>
                  <p>Every contribution counts significantly</p>
                </div>
              </button>
            </div>
            
            <button 
              className="btn btn-donate donate-submit-btn"
              onClick={() => setShowMomo(true)}
            >
              Proceed to Donate <Heart size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {showMomo && (
        <div className="momo-modal-overlay">
          <div className="momo-modal-content">
            <h3>Mobile Money Payment</h3>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Enter your mobile money number and amount to receive a payment prompt on your phone.
            </p>
            <form onSubmit={handleMomoSubmit}>
              <div className="momo-form-group">
                <label>Amount (GH₵)</label>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    if (selectedTier !== 'custom') setSelectedTier('custom');
                  }}
                  min="1"
                  required
                />
              </div>
              <div className="momo-form-group">
                <label>Select Network</label>
                <select value={network} onChange={(e) => setNetwork(e.target.value)}>
                  <option value="MTN">MTN Mobile Money</option>
                  <option value="Vodafone">Telecel Cash (Vodafone)</option>
                  <option value="AirtelTigo">AT Money (AirtelTigo)</option>
                </select>
              </div>
              <div className="momo-form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="e.g. 024XXXXXXX" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="momo-modal-actions">
                <button type="button" className="btn-momo-cancel" onClick={() => setShowMomo(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-momo-confirm">
                  Send Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
