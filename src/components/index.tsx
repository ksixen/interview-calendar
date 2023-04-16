import styled from "styled-components";

export const EventBlock = styled.div<{
    hasEvent?: boolean;
    leftBorder?: boolean;
    withoutBorder?: boolean;
    isSelected?: boolean;
}>`
    min-height: 25px;
    background: ${(props) =>
        props?.isSelected ? "#b3b7ff" : props?.hasEvent ? "#ebecff" : "#fff"};
    border: ${(props) => (props?.withoutBorder ? "none" : "1px solid gray")};
    border-right: none;
    border-left: ${(props) => (props?.leftBorder ? "1px solid" : "none")};
    border-bottom: none;

    height: calc(100% / 24);
    &:first-child {
        border-top: none;
    }
`;
export const EventList = styled.div<{ timeLine?: boolean }>`
    display: flex;
    flex-direction: column;
    width: calc(100% / 7);
    min-width: 25px;
    justify-content: stretch;
`;
export const TimeLines = styled.div`
    height: 25px;
    text-align: right;
`;
export const WeekDay = styled.div`
    // width: 25px;
    text-align: center;
    width: calc(100% / 8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
        font-size: 10px;
    }
`;
export const Day = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    p {
        padding-top: 1px;
    }
    &.active {
        background: #ff3131;
        color: #ffffff;
    }
`;
export const TextButton = styled.span`
    color: #ff3131;
    font-size: 20px;
    float: right;
`;
export const GridHorizontal = styled.div<{ paddingLeft?: number }>`
    background: ${(props) => props?.color || "white"};
    display: flex;
    margin: 0 auto
    padding-left: 25px; 
    
    width: 100%;
    ${(props) =>
        props?.paddingLeft ? `padding-left: ${props.paddingLeft}px;` : ""}
    `;
