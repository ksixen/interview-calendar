import React, { useMemo, useState } from "react";
import {
    EventBlock,
    EventList,
    GridHorizontal,
    TextButton,
    TimeLines,
} from ".";
import { clearTime, getThisWeek } from "funcs";
import { daysTimeLine } from "../constants";
import dayjs from "dayjs";

interface ITimelineView {
    store: {
        setter: React.Dispatch<React.SetStateAction<Record<string, string>>>;

        getter: Record<string, string>;
    };
}

const TimelineView: React.FC<ITimelineView> = (props) => {
    const { store } = props;
    const [selected, setSelected] = useState<string>("");
    const days = useMemo(() => getThisWeek("monday"), []);
    return (
        <React.Fragment>
            <GridHorizontal>
                <EventList timeLine={true}>
                    {daysTimeLine.map((e) => {
                        return (
                            <TimeLines key={e}>
                                {clearTime(dayjs().set("hour", e)).format(
                                    "HH:mm"
                                )}
                            </TimeLines>
                        );
                    })}
                </EventList>
                {days.map((day, dayIndex) => (
                    <EventList key={day.toISOString()}>
                        {daysTimeLine.map((e) => {
                            const inTimeline = clearTime(
                                day.set("hour", e)
                            ).toISOString();
                            const event = store.getter[inTimeline];

                            return (
                                <EventBlock
                                    key={e}
                                    isSelected={inTimeline === selected}
                                    leftBorder={dayIndex !== 0}
                                    hasEvent={!!event}
                                    onClick={() => setSelected(inTimeline)}
                                />
                            );
                        })}
                    </EventList>
                ))}
            </GridHorizontal>
            {selected && store.getter[selected] && (
                <TextButton
                    onClick={() => {
                        store.setter((prev) => {
                            const newStore = { ...prev };
                            newStore[selected] = "";
                            return newStore;
                        });
                    }}
                >
                    Delete
                </TextButton>
            )}
        </React.Fragment>
    );
};
export default React.memo(TimelineView);
