import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { removeBackground } from '@imgly/background-removal';
import { useTheme } from './ThemeProvider';
import { FaImage, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { BiCloudUpload } from 'react-icons/bi';
import { MdOutlineError } from 'react-icons/md';

function BackgroundRemover() {
    const { darkMode } = useTheme();
    const [inputFiles, setInputFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [results, setResults] = useState([]);
    const [processing, setProcessing] = useState(false);
    const fileInputRef = useRef();

    const handleFiles = (files) => {
        const fileArray = Array.from(files);
        setInputFiles(fileArray);
        const urls = fileArray.map(f => URL.createObjectURL(f));
        setPreviews(urls);
        setResults([]); // clear old results
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleProcess = async () => {
        setProcessing(true);
        const outputs = [];
        for (let file of inputFiles) {
            try {
                const blob = await removeBackground(file);
                const url = URL.createObjectURL(blob);
                outputs.push({ url, name: file.name });
            } catch (e) {
                outputs.push({ url: '', name: file.name, error: true });
            }
        }
        setResults(outputs);
        setProcessing(false);
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-background-dark' : 'bg-background-light'
            }`}>
            <header className="w-full px-6 md:px-12 py-6 fixed top-0 z-50">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        } transition-colors`}
                >
                    <FaArrowLeft />
                    <span>Back to Home</span>
                </Link>
            </header>

            <main className="flex-1 flex items-center justify-center p-8 pt-24">
                <div className={`w-full max-w-3xl rounded-2xl p-8 ${darkMode ? 'bg-card-dark' : 'bg-white'
                    } shadow-sharp`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-xl ${darkMode ? 'bg-primary-dark/10' : 'bg-primary-light/10'}`}>
                            <FaImage className={`h-6 w-6 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
                        </div>
                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Remove Background
                        </h2>
                    </div>

                    <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Upload an image to remove its background instantly. Get a transparent PNG file.
                    </p>

                    <div
                        className={`w-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center py-10 mb-6 cursor-pointer transition ${darkMode
                                ? 'border-gray-700 bg-background-dark hover:border-gray-600'
                                : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={() => fileInputRef.current.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <BiCloudUpload className={`text-4xl mb-2 ${darkMode ? 'text-primary-dark' : 'text-primary-light'}`} />
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            ref={fileInputRef}
                            onChange={e => e.target.files && handleFiles(e.target.files)}
                        />
                        <span className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Click or drag & drop to upload
                        </span>
                        <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>
                            JPG, PNG, WebP up to 40MB
                        </span>
                    </div>

                    {previews.length > 0 && (
                        <div className="flex flex-wrap gap-4 justify-center mb-6">
                            {previews.map((src, i) => (
                                <div key={i} className={`p-2 rounded-lg ${darkMode ? 'bg-background-dark' : 'bg-gray-50'}`}>
                                    <img src={src} alt={`preview ${i}`} className="h-24 rounded" />
                                </div>
                            ))}
                        </div>
                    )}

                    <button
                        className={`w-full py-3 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 ${darkMode
                                ? 'bg-white text-gray-900 hover:bg-gray-100'
                                : 'bg-primary-light text-white hover:bg-primary-light/90'
                            }`}
                        onClick={handleProcess}
                        disabled={!inputFiles.length || processing}
                    >
                        {processing ? 'Processing...' : 'Remove Background'}
                    </button>

                    {results.length > 0 && (
                        <div className="w-full mt-8">
                            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Results</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {results.map((res, i) => (
                                    <div key={i} className="text-center">
                                        {res.error ? (
                                            <div className="text-red-500 flex items-center gap-2">
                                                <MdOutlineError />
                                                Error processing {res.name}
                                            </div>
                                        ) : (
                                            <div className={`p-2 rounded-lg ${darkMode ? 'bg-background-dark' : 'bg-gray-50'}`}>
                                                <img src={res.url} alt={`result ${i}`} className="h-24 rounded mx-auto" />
                                                <a
                                                    href={res.url}
                                                    download={res.name.replace(/\.[^/.]+$/, "") + "_bg.png"}
                                                    className={`mt-2 flex items-center justify-center gap-2 ${darkMode ? 'text-primary-dark hover:text-primary-dark/80' : 'text-primary-light hover:text-primary-light/80'
                                                        }`}
                                                >
                                                    <FaDownload />
                                                    Download
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default BackgroundRemover;
