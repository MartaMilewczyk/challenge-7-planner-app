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
    let todayDate = dayjs(). format('dddd[,] DD MMM YYYY [at] HH:mm:ss');
    currentDayEl.text(todayDate);
}

setInterval(todayDateDisplay, 1);

function renderCalendarRows() {
    calendarEventEl.hide(':first-child');
    const calEventEl = $('.calendar-event');
    let currentHour = dayjs().format('h');

    for (let i = startHour; i <= endHour; i++) {
        let newEl = calEventEl.clone().appendTo(calendarContainerEl);
        evHourEl = newEl.children('.event-hour');
        evHourEl.text(i + ":00")

        currentHour < i ? eventTextEl.addClass("future")
        : currentHour === i ? eventTextEl.addClass("present")
        : eventTextEl.addClass("past");
    }

    console.log(evHourEl);
}

renderCalendarRows();

