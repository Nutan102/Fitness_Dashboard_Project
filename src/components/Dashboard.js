import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('activities');

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-header">
          <img 
            src="https://via.placeholder.com/50" 
            alt="Profile" 
            className="profile-pic"
          />
          <div>
            <h2>John Doe</h2>
            <p>Premium Member</p>
          </div>
          <button 
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <button 
          className={`nav-button ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          Activities
        </button>
        <button 
          className={`nav-button ${activeTab === 'nutrition' ? 'active' : ''}`}
          onClick={() => setActiveTab('nutrition')}
        >
          Nutrition
        </button>
        <button 
          className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Last 7 Days Section */}
        <section className="metrics-section">
          <h2>Last 7 days</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Steps</h3>
              <p className="metric-value">56,432</p>
            </div>
            <div className="metric-card">
              <h3>Calories</h3>
              <p className="metric-value">2,614</p>
            </div>
            <div className="metric-card">
              <h3>Workout Time</h3>
              <p className="metric-value">7 hr 12 min</p>
            </div>
            <div className="metric-card">
              <h3>Active Min</h3>
              <p className="metric-value">132 min</p>
            </div>
          </div>
        </section>

        {/* Steps Overview */}
        <section className="chart-section">
          <h2>Steps Overview</h2>
          <div className="steps-chart">
            <div className="chart-y-axis">
              <span>10k</span>
              <span>6k</span>
              <span>2k</span>
            </div>
            <div className="chart-bars">
              {[70, 50, 30, 80, 40, 60, 90].map((height, index) => (
                <div 
                  key={index}
                  className="chart-bar" 
                  style={{ '--height': `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="chart-x-axis">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </section>

        {/* Calories by Activity */}
        <section className="activity-section">
          <h2>Calories by Activity</h2>
          <div className="activity-chart">
            <div className="chart-y-axis">
              <span>12k</span>
              <span>10k</span>
              <span>500</span>
            </div>
            <div className="activity-bars">
              <div className="activity-bar running" style={{ '--height': '80%' }}>
                <span>Running</span>
              </div>
              <div className="activity-bar cycling" style={{ '--height': '60%' }}>
                <span>Cycling</span>
              </div>
              <div className="activity-bar weightlifting" style={{ '--height': '30%' }}>
                <span>Weightlifting</span>
              </div>
            </div>
          </div>
          
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {[
                { user: 'Cody Fisher', activity: 'Running', duration: '32 min', calories: '280 kcal' },
                { user: 'Jonny Wilson', activity: 'Cycling', duration: '45 min', calories: '410 kcal' },
                { user: 'Jacob Jones', activity: 'Yoga', duration: '30 min', calories: '115 kcal' }
              ].map((item, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-user">{item.user}</div>
                  <div className="activity-info">
                    <span>{item.activity}</span>
                    <span>{item.duration}</span>
                    <span>{item.calories}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;