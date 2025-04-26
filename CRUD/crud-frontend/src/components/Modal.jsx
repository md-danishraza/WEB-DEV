import React, { useState } from "react";
import { useEffect } from "react";

function Modal({ modal, handleSubmit }) {
  // at initial render form in empty
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
    rating: "",
    isactive: false,
  });

  // Update formData when modal.client changes
  useEffect(() => {
    setFormData({
      name: modal.client?.name || "",
      email: modal.client?.email || "",
      job: modal.client?.job || "",
      rating: modal.client?.rating || "",
      isactive: modal.client?.isactive || false,
    });
  }, [modal.client]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Custom email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    handleSubmit(formData);
  };

  if (!modal.isOpen) return null;

  return (
    <dialog id="my_modal_5" className="modal  sm:modal-middle" open>
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {modal.mode === "add" ? "Add New Client" : "Edit Client"}
        </h3>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job</span>
            </label>
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Enter job title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating (1-5)"
              className="input input-bordered w-full"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>

          {/* Status Field */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Active Status</span>
              <input
                type="checkbox"
                name="isactive"
                checked={formData.isactive}
                onChange={handleChange}
                className="checkbox"
              />
            </label>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              {modal.mode === "add" ? "Add" : "Update"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => handleSubmit(null)} // Close modal
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
