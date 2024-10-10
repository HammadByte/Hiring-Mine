    import React, { useState } from 'react';

    export const Navbar = () => {
        const [isDarkMode, setIsDarkMode] = useState(true);
        const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

        const toggleTheme = () => {
            setIsDarkMode(!isDarkMode);
            document.body.classList.toggle('bg-white', !isDarkMode);
            document.body.classList.toggle('bg-gray-900', isDarkMode);
        };

        return (
            <div className={`flex flex-col items-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="theme-container">
                <header className="w-full flex justify-between items-center p-4">
                    <div className={`text-3xl font-bold ${isDarkMode ? 'text-purple-600' : 'text-gray-900'}`}>Hiring Mine</div>
                    
                    <nav className={`hidden md:flex space-x-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} mx-auto`}>
                        <a href="#" className="hover:text-purple-600">About Us</a>
                        <a href="#" className="hover:text-purple-600">People</a>
                        <a href="#" className="hover:text-purple-600">Jobs</a>
                        <a href="#" className="hover:text-purple-600">Login</a>
                        <a href="#" className="hover:text-purple-600">Join Now</a>
                        <a href="#" className="text-purple-600">Employee / Post Job</a>
                    </nav>

                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="flex items-center cursor-pointer" id="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? (
                            <i className="fas fa-moon text-white"></i>  
                        ) : (
                            <i className="fas fa-sun text-black"></i>   
                        )}
                    </div>
                </header>

                {isMobileNavOpen && (
                    <nav id="nav-mobile" className={`flex flex-col items-center mt-4 space-y-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-4 rounded-lg`}>
                        <a href="#" className="hover:text-purple-600">About Us</a>
                        <a href="#" className="hover:text-purple-600">People</a>
                        <a href="#" className="hover:text-purple-600">Jobs</a>
                        <a href="#" className="hover:text-purple-600">Login</a>
                        <a href="#" className="hover:text-purple-600">Join Now</a>
                        <a href="#" className="text-purple-600">Employee / Post Job</a>
                    </nav>
                )}

                <main className="flex flex-col items-center mt-16">
                    <h1 className={`text-6xl font-bold text-center ${isDarkMode ? 'text-blue-500' : 'text-gray-900'}`}>Dig. Apply</h1>
                    <h1 className={`text-6xl font-bold text-center ${isDarkMode ? 'text-blue-500' : 'text-gray-900'}`}>Prepare Your Future</h1>
                    <p className={`text-center text-lg mt-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        Hiring Mine connects employer and job seekers, where employers are the source of the <br /> resources and the job seeker can find and apply for their targeted job.
                    </p>
                    <div className="flex mt-8">
                        <input type="text" placeholder="Search by Role or Keyword" className={`p-2 rounded-l ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'} border border-gray-700`} />
                        <button className={`p-2 border rounded-r ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
                            <i className="fas fa-search text-purple-600"></i>
                        </button>
                    </div>
                    <button className={`mt-4 px-6 py-2 ${isDarkMode ? 'bg-purple-600' : 'bg-gray-300'} text-white rounded-full`}>Find Jobs</button>
                </main>
            </div>
        );
    };
