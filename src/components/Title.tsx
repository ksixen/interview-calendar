import dayjs from "dayjs";
import React, { useCallback } from "react";
import { clearTime } from "funcs";
import { TextButton } from "./index";
const Title = (props: { onAddEvent: (e: string) => void }) => {
    const { onAddEvent } = props;
    const handleAddEvent = useCallback(() => {
        const request = prompt(
            "Enter event time: YYYY-MM-DD HH:mm:ss",
            clearTime(dayjs()).format("YYYY-MM-DD HH:mm:ss")
        );
        const date = new Date(`${request}`);
        if (isNaN(+date)) {
            alert("Invalid event time!");
        } else {
            onAddEvent(clearTime(dayjs(date)).toISOString());
        }
    }, [onAddEvent]);
    return (
        <div>
            <span>Interview Calendar</span>
            <TextButton onClick={handleAddEvent}>+</TextButton>
        </div>
    );
};
export default React.memo(Title)