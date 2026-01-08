import React from "react";

const Spinner = () => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
    <span className="text-gray-300">লোড হচ্ছে...</span>
  </div>
);

export default Spinner;
