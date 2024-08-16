/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  content: Yup.string()
    .min(10, "Content must be at least 10 characters")
    .required("Content is required"),
});

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [tags, setTags] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Todo added");

      resetForm();
      setTags([]);
    },
  });

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    formik.handleChange(e);

    const newTags = newTitle
      .split(/\s+/)
      .filter((word) => word.length > 2 && word !== "are" && word !== "the");
    setTags(newTags);
  };
  //add note
  const addNewNote = async () => {};

  //edit note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-200"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="input-label">TITLE</label>
          <input
            type="text"
            className="text-2xl text-slate-950 outline-none"
            placeholder="Study at 5'o clock"
            name="title"
            value={formik.values.title}
            onChange={handleTitleChange}
          />
          {formik.errors.title && (
            <div className="text-red-500 text-sm">{formik.errors.title}</div>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="input-label">CONTENT</label>
          <textarea
            className="text-sm text-slate-950 outline-none bg-slate-100 p-2 rounded"
            placeholder="Content"
            rows={10}
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
          />
          {formik.errors.content && (
            <div className="text-red-500 text-sm">{formik.errors.content}</div>
          )}
        </div>

        <div className="mt-3">
          <label className="input-label">TAGS</label>
          <TagInput tags={tags} />
        </div>

        <button
          className="btn-primary font-medium mt-5 p-3"
          type="submit"
          onClick={handleAddNote}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddEditNotes;
