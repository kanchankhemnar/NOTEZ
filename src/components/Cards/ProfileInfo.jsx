/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  // Compute the initials and name conditionally
  const initials = userInfo
    ? getInitials(userInfo.fullName)
    : getInitials("Anonymous Dinasour");
  const userName = userInfo ? userInfo.fullName : "Anonymous";

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-300">
        {initials}
      </div>
      <div>
        <p className="text-sm font-medium">{userName}</p>
        <button className="text-sm text-slate-500" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

// Define PropTypes for the component
ProfileInfo.propTypes = {
  userInfo: PropTypes.shape({
    fullName: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default ProfileInfo;
