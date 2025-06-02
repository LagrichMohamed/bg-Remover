import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BackgroundRemover from "./components/BackgroundRemover";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/try" element={<BackgroundRemover />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
