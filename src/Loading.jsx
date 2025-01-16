import React from "react";
import "./LoadingSpinner.css"; // CSS ফাইল ইমপোর্ট করুন

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
