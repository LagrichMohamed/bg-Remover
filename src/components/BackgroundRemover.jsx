import { useState } from 'react';
import { removeBackground } from '@imgly/background-removal';

function BackgroundRemover() {
    const [inputFiles, setInputFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [results, setResults] = useState([]);
    const [processing, setProcessing] = useState(false);

    const handleFiles = (files) => {
        const fileArray = Array.from(files);
        setInputFiles(fileArray);
        const urls = fileArray.map(f => URL.createObjectURL(f));
        setPreviews(urls);
        setResults([]); // clear old results
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
        <div className="p-4 max-w-3xl mx-auto">
            <input
                type="file"
                accept="image/*"
                multiple
                className="mb-4 block"
                onChange={e => e.target.files && handleFiles(e.target.files)}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={handleProcess}
                disabled={!inputFiles.length || processing}
            >
                {processing ? 'Processing...' : 'Remove Backgrounds'}
            </button>
            <div className="flex flex-wrap gap-4 mt-4">
                {previews.map((src, i) => (
                    <img key={i} src={src} alt={`preview ${i}`} className="h-32 border" />
                ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
                {results.map((res, i) => (
                    <div key={i} className="text-center">
                        {res.error ? (
                            <div className="text-red-500">Error processing {res.name}</div>
                        ) : (
                            <>
                                <img src={res.url} alt={`result ${i}`} className="h-32 border" />
                                <a
                                    href={res.url}
                                    download={res.name.replace(/\.[^/.]+$/, "") + "_bg.png"}
                                    className="block mt-2 text-blue-500 hover:underline"
                                >
                                    Download
                                </a>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BackgroundRemover;
