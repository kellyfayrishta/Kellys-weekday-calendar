// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar'
$('#currentDay').text(moment().format("MMM Do YY"))
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(document).ready(function () {
  // listen for save button clicks
  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
    console.log("this", time)
    console.log("value", value)

    // save in localStorage
    localStorage.setItem(time, value)
  });
    
    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 5000);
  

  function hourUpdater() {
    // get current number of hours (preferably with moment.js)
    var currentHour = moment().hours();

    // loop over time blocks ---> https://api.jquery.com/each/
    var eachFunction = function() {
    var blockHour = parseInt($(this).attr('data-hour'))
      console.log(blockHour)

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }

    }
    var timeBlock = $('.time-block').each(eachFunction)
    console.log("timeBlock", timeBlock)
    // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  ///need to repeat line 21 for all the other hours

  // display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));
  
});