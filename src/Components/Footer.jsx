import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-700 to-purple-500 text-white py-10">
                    <div className="container mx-auto flex justify-between items-start px-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">HiringMine</h2>
                            <p className="mb-4">HiringMine connects employer and job seekers,<br /> where employers are the source of the resources <br /> and the job seeker can find and apply for their <br /> targeted job.</p>
                            <h3 className="text-lg font-semibold mb-2">Follow us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white text-2xl"><i className="fab fa-whatsapp"></i></a>
                                <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p><i className="fas fa-envelope"></i> portal.hiringmine@gmail.com</p>
                        </div>
                    </div>
                    <div className="border-t border-white mt-10 pt-4 text-center">
                        <a href="#" className="text-white mx-2">Privacy Policy</a>
                        <a href="#" className="text-white mx-2">Terms and Condition</a>
                        <p className="mt-2">Copyright Hiringmine 2024. All Rights Reserved</p>
                    </div>
                </footer>
  )
}
