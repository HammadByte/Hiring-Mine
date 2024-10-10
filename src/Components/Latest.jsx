import React from 'react'

export const Latest = ({ company, position, salary, location, time, views }) => {
    const App = () => (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
                Latest And Top <span className="text-white">Job Openings</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <JobCard 
                    company="Weblinx Solution" 
                    position="Laravel Developer" 
                    salary="No Salary Mentioned" 
                    location="Karachi, Pakistan" 
                    time="2 hours ago" 
                    views="3" 
                />
                <JobCard 
                    company="Anonymous" 
                    position="Legal Typist" 
                    salary="No Salary Mentioned" 
                    location="Karachi, Pakistan" 
                    time="8 hours ago" 
                    views="2" 
                />
                <JobCard 
                    company="Define TechSolution" 
                    position="Flutter Developer" 
                    salary="No Salary Mentioned" 
                    location="" 
                    time="8 hours ago" 
                    views="12" 
                />
                <JobCard 
                    company="Define TechSolution" 
                    position="Laravel Developer" 
                    salary="No Salary Mentioned" 
                    location="" 
                    time="8 hours ago" 
                    views="13" 
                />
                <JobCard 
                    company="Architecture services company" 
                    position="Lead Generation Executive" 
                    salary="No Salary Mentioned" 
                    location="" 
                    time="a day ago" 
                    views="4" 
                />
                <JobCard 
                    company="Urban Trends" 
                    position="Accountant" 
                    salary="No Salary Mentioned" 
                    location="" 
                    time="a day ago" 
                    views="78" 
                />
            </div>
        </div>
    )
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
    <div className="flex justify-between items-center">
        <div>
            <h3 className="text-lg font-semibold">{company}</h3>
            <p className="text-sm font-bold text-white">{position}</p>
            <p className="text-sm text-blue-500">{salary}</p>
            <p className="text-sm text-gray-400">{location}</p>
        </div>
        <div>
            <i className="fas fa-mountain text-4xl text-purple-600"></i>
        </div>
    </div>
    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
        <p>{time}</p>
        <p>{views} views</p>
    </div>
</div>



  )
}
