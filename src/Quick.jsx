import React from 'react'

export const Quick = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Get Hired In <span className="text-blue-500">4 Quick Easy Steps (Coming Soon)</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-10">
                        The quickest and the most effective way to get hired by the top firm.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                            <i className="fas fa-user-plus text-2xl text-purple-500 mb-4"></i>
                            <h2 className="text-xl font-semibold text-purple-500 mb-2">Create an Account</h2>
                            <p className="text-gray-400">
                                Join our vibrant community. Create your account and unlock boundless opportunities.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                            <i className="fas fa-search text-2xl text-purple-500 mb-4"></i>
                            <h2 className="text-xl font-semibold text-purple-500 mb-2">Search a Job</h2>
                            <p className="text-gray-400">
                                Discover your ideal job. Our intuitive search feature makes job hunting effortless.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                            <i className="fas fa-file-upload text-2xl text-purple-500 mb-4"></i>
                            <h2 className="text-xl font-semibold text-purple-500 mb-2">Upload CV/Resume</h2>
                            <p className="text-gray-400">
                                Showcase your expertise. Upload your CV or resume and stand out to employers.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition duration-300">
                            <i className="fas fa-briefcase text-2xl text-purple-500 mb-4"></i>
                            <h2 className="text-xl font-semibold text-purple-500 mb-2">Get a Job</h2>
                            <p className="text-gray-400">
                                Achieve your career goals. Apply for jobs and embark on your next adventure.
                            </p>
                        </div>
                    </div>
                </div>
  )
}
