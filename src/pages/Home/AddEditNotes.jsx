/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  content: Yup.string()
    .min(10, "Content must be at least 10 characters")
    .required("Content is required"),
});

const AddEditNotes = ({
  noteData,
  type,
  onClose,
  getAllNotes,
  showToastMessage,
}) => {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: noteData?.title || "",
      content: noteData?.content || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (type === "edit") {
          await editNote(values);
        } else {
          await addNewNote(values);
        }
        getAllNotes();
        onClose();
        resetForm();
        setTags([]);
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
      }
    },
  });

  const handleTitleChange = (e) => {
    formik.handleChange(e);
    const newTitle = e.target.value;
    const newTags = newTitle
      .split(/\s+/)
      .filter((word) => word.length > 2 && word !== "are" && word !== "the");
    setTags(newTags);
  };

  const addNewNote = async ({ title, content }) => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Todo added successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const editNote = async ({ title, content }) => {
    // Edit note logic here
    const noteId = noteData._id;
    const newTags = title
      .split(/\s+/)
      .filter((word) => word.length > 2 && word !== "are" && word !== "the");
    setTags(newTags);
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Todo updated successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
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

        <button className="btn-primary font-medium mt-5 p-3" type="submit">
          {type === "edit" ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default AddEditNotes;
