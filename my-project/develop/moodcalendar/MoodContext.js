import React, { createContext, useState, useContext } from 'react';

const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [moods, setMoods] = useState({});

    return (
        <MoodContext.Provider value={{ moods, setMoods }}>
            {children}
        </MoodContext.Provider>
    );
}

export const useMood = () => {
    return useContext(MoodContext);
}
