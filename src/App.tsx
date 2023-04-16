import React, { useState } from "react";
import Title from "components/Title";

import WeekView from "components/WeekView";
import TimelineView from "components/TimelineView";

function App() {
    const [store, setStore] = useState<Record<string, string>>({});

    return (
        <div className="App">
            <Title
                onAddEvent={(time) => {
                    setStore((prev) => {
                        const newStore = { ...prev };
                        newStore[time] = time;
                        return newStore;
                    });
                }}
            />
            <WeekView />
            <TimelineView store={{ getter: store, setter: setStore }} />.
        </div>
    );
}

export default App;
