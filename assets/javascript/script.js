var dispDate = document.getElementById('currentDay');

var getDate = function() {
    var date = moment().format("dddd, MMMM Do");
    dispDate.textContent = date;
}

getDate();