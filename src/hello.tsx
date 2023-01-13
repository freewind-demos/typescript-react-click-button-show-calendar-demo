import React, {useState} from 'react'
import {Calendar, Popover} from 'antd';
import {css} from '@emotion/css';

export default function Hello() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>();

    return <Popover open={showCalendar} content={
        <Calendar fullscreen={false}
                  onSelect={(date) => {
                      setSelectedDate(date.toDate());
                      setShowCalendar(false);
                  }}
                  className={css`
                    width: 300px;

                    .ant-picker-calendar-mode-switch {
                      display: none
                    }
                  `}
        />
    }>
        <button onClick={() => setShowCalendar(true)}>
            choose a date
            &nbsp;
            {selectedDate ? `(${selectedDate.toISOString()})` : ''}
        </button>
    </Popover>
};
