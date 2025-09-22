import React from 'react';
import { Circle, Clock } from 'lucide-react';

const AvailabilityStatus = () => {
  const currentStatus = {
    available: true,
    message: "Available for new opportunities",
    timezone: "IST (UTC+5:30)",
    responseTime: "Within 24 hours"
  };

  return (
    <div className="feature-card">
      <div className="flex items-start space-x-4">
        <div className="flex items-center space-x-2">
          <Circle 
            size={12} 
            fill={currentStatus.available ? 'var(--accent-primary)' : '#ef4444'}
            style={{ color: currentStatus.available ? 'var(--accent-primary)' : '#ef4444' }}
          />
          <span 
            className="body-sm font-medium"
            style={{ color: currentStatus.available ? 'var(--accent-primary)' : '#ef4444' }}
          >
            {currentStatus.available ? 'Available' : 'Busy'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 space-y-2">
        <p className="body-md" style={{ color: 'var(--text-primary)' }}>
          {currentStatus.message}
        </p>
        
        <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Clock size={14} />
          <span>{currentStatus.timezone}</span>
        </div>
        
        <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
          Response time: {currentStatus.responseTime}
        </p>
      </div>
    </div>
  );
};

export default AvailabilityStatus;