import React, { useMemo } from "react";
import { Day, GridHorizontal, WeekDay } from ".";
import dayjs from "dayjs";
import { weekFirstLetters } from "../constants";
import { getThisWeek } from "../funcs";

const WeekView = () => {

    const days = useMemo(() => getThisWeek("monday"), []);
    return (
        <React.Fragment>
            <GridHorizontal color="#f6f6f6" paddingLeft={0}>
                <WeekDay></WeekDay>
                {days.map((day) => {
                    return (
                        <WeekDay key={day.toISOString()}>
                            <span>{weekFirstLetters[day.day()]}</span>
                            <Day
                                className={
                                    day.date() === dayjs().date()
                                        ? `active`
                                        : ""
                                }
                            >
                                <p>{day.date()}</p>
                            </Day>
                        </WeekDay>
                    );
                })}
            </GridHorizontal>

        </React.Fragment>
    );
};
export default React.memo(WeekView);
