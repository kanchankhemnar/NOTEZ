/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TagInput = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagInput;
