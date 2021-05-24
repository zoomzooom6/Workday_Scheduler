var dispDate = document.getElementById('currentDay');
var currentTime = moment().format("H");
var nineInput = document.getElementById('nineInput');
var nineSave = document.getElementById('nineSave');
var tenInput = document.getElementById('tenInput');
var tenSave = document.getElementById('tenSave');
var elevenInput = document.getElementById('elevenInput');
var elevenSave = document.getElementById('elevenSave');
var twelveInput = document.getElementById('twelveInput');
var twelveSave = document.getElementById('twelveSave');
var oneInput = document.getElementById('oneInput');
var oneSave = document.getElementById('oneSave');
var twoInput = document.getElementById('twoInput');
var twoSave = document.getElementById('twoSave');
var threeInput = document.getElementById('threeInput');
var threeSave = document.getElementById('threeSave');
var fourInput = document.getElementById('fourInput');
var fourSave = document.getElementById('fourSave');
var fiveInput = document.getElementById('fiveInput');
var fiveSave = document.getElementById('fiveSave');

var getDate = function () {
    var date = moment().format("dddd, MMMM Do");
    dispDate.textContent = date;
    console.log(currentTime);
}

var changeColor = function () {
    if (currentTime < 9) {
        $(".events").addClass("future");
    } else if (currentTime === '9') {
        $(".nine").removeClass("future");
        $(".nine").addClass("present");
        $(".ten").addClass("future");
        $(".eleven").addClass("future");
        $(".twelve").addClass("future");
        $(".oNe").addClass("future");
        $(".tWo").addClass("future");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '10') {
        $(".nine").removeClass("present");
        $(".nine").addClass("past");
        $(".ten").removeClass("future");
        $(".ten").addClass("present");
        $(".eleven").addClass("future");
        $(".twelve").addClass("future");
        $(".oNe").addClass("future");
        $(".tWo").addClass("future");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '11') {
        $(".nine").addClass("past");
        $(".ten").removeClass("present");
        $(".ten").addClass("past");
        $(".eleven").removeClass("future");
        $(".eleven").addClass("present");
        $(".twelve").addClass("future");
        $(".oNe").addClass("future");
        $(".tWo").addClass("future");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '12') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").removeClass("present");
        $(".eleven").addClass("past");
        $(".twelve").removeClass("future");
        $(".twelve").addClass("present");
        $(".oNe").addClass("future");
        $(".tWo").addClass("future");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '13') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").removeClass("present");
        $(".twelve").addClass("past");
        $(".oNe").removeClass("future");
        $(".oNe").addClass("present");
        $(".tWo").addClass("future");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '14') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").addClass("past");
        $(".oNe").removeClass("present");
        $(".oNe").addClass("past");
        $(".tWo").removeClass("future");
        $(".tWo").addClass("present");
        $(".thrEe").addClass("future");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '15') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").addClass("past");
        $(".oNe").addClass("past");
        $(".tWo").removeClass("present");
        $(".tWo").addClass("past");
        $(".thrEe").removeClass("future");
        $(".thrEe").addClass("present");
        $(".fOur").addClass("future");
        $(".five").addClass("future");
    } else if (currentTime === '16') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").addClass("past");
        $(".oNe").addClass("past");
        $(".tWo").addClass("past");
        $(".thrEe").removeClass("present");
        $(".thrEe").addClass("past");
        $(".fOur").removeClass("future");
        $(".fOur").addClass("present");
        $(".five").addClass("future");
    } else if (currentTime === '17') {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").addClass("past");
        $(".oNe").addClass("past");
        $(".tWo").addClass("past");
        $(".thrEe").addClass("past");
        $(".fOur").removeClass("present");
        $(".fOur").addClass("past");
        $(".five").removeClass("future");
        $(".five").addClass("present");
    } else {
        $(".nine").addClass("past");
        $(".ten").addClass("past");
        $(".eleven").addClass("past");
        $(".twelve").addClass("past");
        $(".oNe").addClass("past");
        $(".tWo").addClass("past");
        $(".thrEe").addClass("past");
        $(".fOur").addClass("past");
        $(".five").removeClass("present");
        $(".five").addClass("past");
    }
}

setInterval(function () {
    changeColor();
}, 900000);

changeColor();
getDate();