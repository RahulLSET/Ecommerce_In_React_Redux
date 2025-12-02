import React from "react";
import { addToCart , removeFromCart} from './cartSlice';
import { useDispatch } from "react-redux";

function Modal({ open, setOpen ,id}) {
    console.log(id)
    const dispatch =useDispatch()
  if (!open) return null; // ✅ Prevents rendering when open is false

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => setOpen(false)} // ✅ Closes when clicking outside modal
    >
      {/* Modal Box */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
        onClick={(e) => e.stopPropagation()} // ✅ Prevents closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
          onClick={() => setOpen(false)}
        >
          ❌
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <p className="mb-4">Click the button below</p>
          <div className="flex justify-between mt-7">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => {setOpen(false),dispatch(removeFromCart(id))}}
            >
              Delete
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => {setOpen(false)}}
            >
              Not Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
