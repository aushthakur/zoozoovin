import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apkFile from "./app-release.apk"; // Adjust the path as needed
import { FaTimes } from 'react-icons/fa'; // Importing the icon from react-icons

const Modal = ({ showModal, closeModal, imageSrc }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ToastContainer />
      <div className="bg-white p-0 rounded-lg relative">
        <button
          className="absolute top-2 right-2 bg-white text-black rounded-full p-1"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <img
          src={imageSrc}
          alt="Modal Content"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Modal;
