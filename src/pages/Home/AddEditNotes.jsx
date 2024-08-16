import React from "react";

const AddEditNotes=()=>{
  return (
    <>
      <div>
        <div className="flex flex-col gap-2">
          <label className="input-label">TITLE</label>
          <input type="text" 
          className="text-2xl text-slate-950 outline-none"
          placeholder="Study at 5'o clock"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label  className="input-label">CONTENT</label>
          <textarea 
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded"
          placeholder="Content"
          rows={10}
          ></textarea>
        </div>
        <div className="mt-3">
          <label className="input-label">TAGS</label>
        </div>
        <button className="btn-primary font-medium mt-5 p-3 " onClick={()=>{}}>ADD</button>
      </div>
    </>
  );
}
export default AddEditNotes;
