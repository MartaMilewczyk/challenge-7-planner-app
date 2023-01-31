const currentDayEl = $('#currentDay');
const calendarContainerEl = $('#calendar-container');
let eventStorage = JSON.parse(localStorage.getItem('event')) || [];

let startHour = 9;
let endHour = 17;

// time display
function todayDateDisplay() {
    let todayDate = dayjs(). format('dddd[,] DD MMM YYYY [at] HH:mm:ss');
    currentDayEl.text(todayDate);
}
setInterval(todayDateDisplay, 1);

// render calendar rows
function renderCalendarRows() {

    for (let i = startHour; i <= endHour; i++) {

        // dynamic creation of elements
        const calendarEventEl = $('<div>').attr('id', 'calendar-event').addClass('row');
        const eventHourEl = $('<div>').attr('id', 'event-hour').addClass('col-md-1 hour').text(i + ':00');
        const eventTextEl = $('<textarea>').attr('id', 'event-text').attr('placeholder', 'Add new calendar event').addClass('col-md-10 description');
        const eventSaveEl = $('<button>').attr('id', 'event-save').addClass('col-md-1 saveBtn').text('Save');

        // append created elements
        calendarEventEl.append(eventHourEl, eventTextEl, eventSaveEl);
        calendarContainerEl.append(calendarEventEl);
        
        let currentHour = dayjs().format('H');

        //   check hour and apply appropriate class
        currentHour == i ? eventTextEl.addClass("present")
        : currentHour > i ? eventTextEl.addClass("past")
        : eventTextEl.addClass("future");

        eventSaveEl.on('click', saveEvent);
    }
    
    function saveEvent(event) {
        event.preventDefault();
        console.log('saved');
    }
    
}

renderCalendarRows();



