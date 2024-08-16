/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-300">
          {getInitials("kanchan khemnr")}
        </div>
        <div>
          <p className="text-sm font-medium">Kanchan</p>
          <button className="text-sm text-slate-500" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

// Define PropTypes for the component
ProfileInfo.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default ProfileInfo;
