const currentDayEl = $('#currentDay');


// time display
function todayDateDisplay() {
    let todayDate = dayjs(). format('dddd[,] DD MMM YYYY [at] hh:mm:ss a');
    currentDayEl.text(todayDate);
}



setInterval(todayDateDisplay, 1);