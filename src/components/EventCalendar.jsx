import React from 'react';
import {Calendar} from "antd";
import {formatDate} from "../utils/formatDate";


const EventCalendar = (props) => {
    function dateCellRender(value){
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(
            e =>e.date === formatedDate
        )
        return(
            <div>
                {currentDayEvents.map((e, index) =>
                    <div key={index}>
                        {e.description}
                    </div>
                )}
            </div>
        )
    }

    return (
       <Calendar
           dateCellRender={dateCellRender}
       />
    );
};

export default EventCalendar;