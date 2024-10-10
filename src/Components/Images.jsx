import React from 'react'

export const Images = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-10">
        <div className="text-center text-white">
          <img src="https://www.hiringmine.com/assets/Frame-55f66875.png" alt="Illustration of a person connecting with others online" className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Connect With People</h2>
          <h2 className="text-3xl font-bold text-purple-500">Who Can Help</h2>
          <button className="mt-4 px-4 py-2 border border-gray-500 rounded-full hover:border-purple-500">Coming Soon</button>
        </div>
        <div className="border-r border-gray-500"></div>
        <div className="text-center text-white">
          <img src="https://www.hiringmine.com/assets/Layer_1-ab8fadbb.png" alt="Illustration of a person posting a job online" className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Post Your Job</h2>
          <h2 className="text-3xl font-bold text-purple-500">For People To See</h2>
          <button className="mt-4 px-4 py-2 border border-gray-500 rounded-full hover:border-purple-500">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}
