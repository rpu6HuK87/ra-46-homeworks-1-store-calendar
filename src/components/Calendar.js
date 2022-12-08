import React from 'react'
import * as moment from 'moment'
import 'moment/locale/ru'

function Calendar({date}) {
  const d = moment(date) //.add(1, 'months')

  const startD = d.clone().startOf('month').startOf('week')
  const endD = d.clone().endOf('month').endOf('week')
  const day = startD.clone().subtract(1, 'day')
  const calendar = []

  while (day.isBefore(endD, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    )
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{d.format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{d.format('D')}</div>
          <div className="ui-datepicker-material-month">
            {
              Intl.DateTimeFormat('ru', {
                month: 'long',
                day: 'numeric'
              })
                .format(d)
                .split(' ')[1]
            }
          </div>
          <div className="ui-datepicker-material-year">{d.format('YYYY')}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{d.format('MMMM')}</span>&nbsp;
          <span className="ui-datepicker-year">{d.format('YYYY')}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {['Пн', 'В', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((dayOfWeek) => (
              <th scope="col">{dayOfWeek}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td
                  key={index}
                  className={
                    d.isSame(day, 'day')
                      ? 'ui-datepicker-today'
                      : !d.isSame(day, 'month')
                      ? 'ui-datepicker-other-month'
                      : ''
                  }
                >
                  {day.format('D').toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
