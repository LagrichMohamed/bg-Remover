import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { FaMoon, FaSun, FaImage, FaArrowRight, FaBullseye, FaBolt, FaDownload } from "react-icons/fa";
import { BiCloudUpload } from "react-icons/bi";

const Home = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
            {/* Header */}
            <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-6 backdrop-blur-sm bg-opacity-80 fixed top-0 z-50">
                <Link to="/" className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl ${darkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'}`}>
                        <FaImage className={`h-5 w-5 md:h-6 md:w-6 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
                    </div>
                    <span className={`font-bold text-xl md:text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        remove<span className={darkMode ? 'text-primary-dark' : 'text-primary-light'}>bg</span>
                    </span>
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 sm:p-2.5 rounded-xl transition-all ${darkMode
                                ? 'bg-gray-800 text-gray-400 hover:text-gray-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <FaSun className="h-4 w-4 sm:h-5 sm:w-5" /> : <FaMoon className="h-4 w-4 sm:h-5 sm:w-5" />}
                    </button>
                    <Link
                        to="/try"
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 text-sm sm:text-base ${darkMode
                                ? 'bg-white text-gray-900 hover:bg-gray-100'
                                : 'bg-primary-light text-white hover:bg-primary-light/90'
                            }`}
                    >
                        Try Now <FaArrowRight className="text-xs sm:text-sm" />
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            Remove Image Background <br className="hidden sm:block" />
                            <span className={darkMode ? 'text-primary-dark' : 'text-primary-light'}>
                                in Seconds
                            </span>
                        </h1>
                        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Professional-grade background removal powered by AI.
                            100% automated, 100% free.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                to="/try"
                                className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all flex items-center gap-3 w-full sm:w-auto justify-center ${darkMode
                                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                                        : 'bg-primary-light text-white hover:bg-primary-light/90'
                                    }`}
                            >
                                <BiCloudUpload className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                                Start Removing Background
                            </Link>
                            <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                No signup required
                            </span>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className={`mt-8 sm:mt-16 rounded-2xl p-4 sm:p-8 ${darkMode ? 'bg-card-dark' : 'bg-white'
                        } shadow-sharp`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                            {/*
                                {
                                    icon: FaBullseye,
                                    title: "Precise Results",
                                    description: "AI-powered background removal for pixel-perfect results."
                                },
                                {
                                    icon: FaBolt,
                                    title: "Lightning Fast",
                                    description: "Process images in seconds with our optimized algorithm."
                                },
                                {
                                    icon: FaDownload,
                                    title: "High Quality",
                                    description: "Download in high resolution with transparent background."
                                }
                            ].map((feature, index) => (
                            */}
                            <div
                                className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-background-dark' : 'bg-gray-50'
                                    } transition-all hover:scale-[1.02]`}
                            >
                                <div className={`inline-flex p-3 rounded-lg mb-4 ${darkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
                                    }`}>
                                    <FaBullseye className={`h-5 w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-primary-dark' : 'text-primary-light'
                                        }`} />
                                </div>
                                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Precise Results</h3>
                                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>AI-powered background removal for pixel-perfect results.</p>
                            </div>
                            <div
                                className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-background-dark' : 'bg-gray-50'
                                    } transition-all hover:scale-[1.02]`}
                            >
                                <div className={`inline-flex p-3 rounded-lg mb-4 ${darkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
                                    }`}>
                                    <FaBolt className={`h-5 w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-primary-dark' : 'text-primary-light'
                                        }`} />
                                </div>
                                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>Lightning Fast</h3>
                                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Process images in seconds with our optimized algorithm.</p>
                            </div>
                            <div
                                className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-background-dark' : 'bg-gray-50'
                                    } transition-all hover:scale-[1.02]`}
                            >
                                <div className={`inline-flex p-3 rounded-lg mb-4 ${darkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'
                                    }`}>
                                    <FaDownload className={`h-5 w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-primary-dark' : 'text-primary-light'
                                        }`} />
                                </div>
                                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>High Quality</h3>
                                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Download in high resolution with transparent background.</p>
                            </div>
                            {/*
                            ))}
                            */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
