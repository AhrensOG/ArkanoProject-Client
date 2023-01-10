import React from "react";


const Undo = ({ width, className }) => {
    return (
        <svg width={width} viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.65 23H5V20H15.65C17.225 20 18.5935 19.5 19.7555 18.5C20.9185 17.5 21.5 16.25 21.5 14.75C21.5 13.25 20.9185 12 19.7555 11C18.5935 10 17.225 9.5 15.65 9.5H6.2L10.1 13.4L8 15.5L0.5 8L8 0.5L10.1 2.6L6.2 6.5H15.65C18.075 6.5 20.1565 7.2875 21.8945 8.8625C23.6315 10.4375 24.5 12.4 24.5 14.75C24.5 17.1 23.6315 19.0625 21.8945 20.6375C20.1565 22.2125 18.075 23 15.65 23Z" fill="white" className={className} />
        </svg>
    );
};

export default Undo;
