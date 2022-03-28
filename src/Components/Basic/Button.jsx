import React from 'react'
function Button({icon}) {
  return (
    <button
      type="button"
      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="sr-only">View notifications</span>
      {icon}
    </button>
  )
}

export default Button