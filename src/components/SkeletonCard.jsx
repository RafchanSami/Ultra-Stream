import React from "react";

const SkeletonCard = () => {
  return (
    <div className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px]">
      <div className="w-full h-[225px] sm:h-[270px] bg-gray-800 animate-pulse rounded-md" />
      <div className="h-4 bg-gray-800 animate-pulse rounded mt-2 w-3/4" />
    </div>
  );
};

export default SkeletonCard;
