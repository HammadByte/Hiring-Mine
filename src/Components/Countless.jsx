import React from 'react'

export const Countless = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-4xl font-bold text-purple-500">
                Countless Career Options <span className="text-white">Are Waiting For You To Explore</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-10">
                {[
                    { title: "Marketing & Sales", jobs: 447 },
                    { title: "Development", jobs: 317 },
                    { title: "Art & Illustration", jobs: 136 },
                    { title: "Animation", jobs: 77 },
                    { title: "Management", jobs: 67 },
                    { title: "Information Tech", jobs: 55 },
                    { title: "HR & Finance", jobs: 53 },
                    { title: "UX/UI Design", jobs: 47 }
                ].map((item, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 hover:border-purple-500 cursor-pointer">
                        <i className="fas fa-briefcase text-4xl text-purple-500 mb-4"></i>
                        <h2 className="text-xl font-semibold text-purple-500">{item.title}</h2>
                        <p className="text-gray-400">{item.jobs} Jobs</p>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <a href="#" className="text-blue-500 hover:underline">View All →</a>
            </div>
        </div>
    )
}
