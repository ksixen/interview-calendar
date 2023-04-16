import dayjs from "dayjs";

export const clearTime = (day: dayjs.Dayjs): dayjs.Dayjs => {
    return day.set("minute", 0).set("seconds", 0).set("milliseconds", 0);
};
export const getThisWeek = (firstDay?: "sunday" | "monday"): dayjs.Dayjs[] => {
    const days = [];
    let sunday: dayjs.Dayjs = clearTime(dayjs().day(0));
    for (let i = 1; i <= 6; i++) {
        days.push(clearTime(dayjs().day(i)));
    }
    if (firstDay === "monday") {
        return [...days, sunday];
    } else {
        return [sunday, ...days];
    }
};