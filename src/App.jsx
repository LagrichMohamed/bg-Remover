import React, { useState, useEffect } from "react";
import BackgroundRemover from "./components/BackgroundRemover";

const App = () => {
    return (
        <div className="app bg-orange-400 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-6">Background Remover</h1>
            <BackgroundRemover />
        </div>
    )
}
export default App;
