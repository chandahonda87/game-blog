import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import Logo from '../Logo'

function footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-cyan-100 border border-t-2 border-t-white">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2024. All Rights Reserved by C_HondaGaming.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                C_HondaGaming
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a href='https://www.youtube.com/@C_HondaGaming' target="_blank" 
                                        rel="noopener noreferrer"
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        YouTube
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href='https://x.com/Dacoolkid87' target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        X
                                    </a>
                                </li>
                              </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                C_Honda Gaming
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium hover:text-gray-700 ct"
                                        to="/"
                                    >
                                        Website created by CT Studio
                                    </Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default footer