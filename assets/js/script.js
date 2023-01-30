const currentDayEl = $('#currentDay');
const calendarEventEl = $('#calendar-event');
const calendarContainerEl = $('#calendar-container');
const eventHourEl = $('#event-hour');
const eventTextEl = $('#event-text');
const eventSaveEl = $('#event-save');

let startHour = 9;
let endHour = 17;

// time display
function todayDateDisplay() {
    let todayDate = dayjs(). format('dddd[,] DD MMM YYYY [at] hh:mm:ss a');
    currentDayEl.text(todayDate);
}

setInterval(todayDateDisplay, 1);

function renderCalendarRows() {
    // calendarEventEl.hide(':first-child');

    for (let i = startHour; i <= endHour; i++) {
        calendarEventEl.clone().appendTo(calendarContainerEl);
        i < 12 ? eventHourEl.text(i + ":00 am") : eventHourEl.text(i + ":00 pm")
    }
}

renderCalendarRows();