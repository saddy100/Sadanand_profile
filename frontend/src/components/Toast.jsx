import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 5000 }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!shouldRender) return null;

  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const iconColor = type === 'success' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${bgColor} ${borderColor} border rounded-lg shadow-lg p-4 max-w-sm transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3 mt-0.5">
            {type === 'success' ? (
              <CheckCircle className={iconColor} size={20} />
            ) : (
              <AlertCircle className={iconColor} size={20} />
            )}
          </div>
          <div className="flex-grow">
            <p className={`${textColor} text-sm font-medium`}>{message}</p>
          </div>
          <button
            onClick={onClose}
            className={`${textColor} hover:opacity-75 ml-2 flex-shrink-0`}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;