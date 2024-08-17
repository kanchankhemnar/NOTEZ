/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdCreate, MdDelete } from "react-icons/md";
import { BiCheckboxChecked } from "react-icons/bi";

const NoteCard = ({
  title,
  date,
  content,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <>
      <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-sm font-medium">{title}</h6>
            <span className="text-xs text-slate-500">{date}</span>
          </div>
          <BiCheckboxChecked
            className={`icon-btn text-2xl ${
              isPinned ? "text-blue-600" : "text-gray-400"
            }`}
            onClick={onPinNote}
          />
        </div>

        <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <MdCreate
              className="icon-btn hover:text-green-600 cursor-pointer"
              onClick={onEdit}
            />
            <MdDelete
              className="icon-btn hover:text-red-500 cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
