(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingDto = void 0;
var BookingDto = /** @class */ (function () {
    function BookingDto(id, dayOfWeek, week, hour, personId) {
        this.id = id;
        this.dayOfWeek = dayOfWeek;
        this.week = week;
        this.hour = hour;
        this.personId = personId;
    }
    return BookingDto;
}());
exports.BookingDto = BookingDto;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseUrl = "http://localhost:5000/";
function fillPersonTable() {
    $("#tblPeople").empty()
        .append("<tr>\n" +
        "            <th>Nachname</th>\n" +
        "            <th>Vorname</th>\n" +
        "            <th>Alter</th>\n" +
        "            <th>#Reservierungen</th>\n" +
        "        </tr>");
    $.getJSON("".concat(baseUrl, "api/Person"))
        .then(function (people) {
        people.forEach(function (x) {
            var row = $("<tr>");
            row.append($("<td>").text(x.lastName));
            row.append($("<td>").text(x.firstName));
            row.append($("<td>").text(x.age));
            row.append($("<td>").text(x.bookingCount));
            $("#tblPeople").append(row);
        });
    });
}
function fillBookings() {
    var bookingHeader = "<tr>\n" +
        "            <th></th>\n" +
        "            <th>Mo</th>\n" +
        "            <th>Di</th>\n" +
        "            <th>Mi</th>\n" +
        "            <th>Do</th>\n" +
        "            <th>Fr</th>\n" +
        "            <th>Sa</th>\n" +
        "            <th>So</th>\n" +
        "   </tr>";
    $("#tblBookings").empty()
        .append(bookingHeader);
    for (var i = 10; i <= 22; i++) {
        var row = $("<tr>");
        row.append($("<td>").text(i));
        for (var j = 0; j < 7; j++) {
            row.append($("<td>").text("").attr("id", "".concat(i, "-").concat(j)));
        }
        $("#tblBookings").append(row);
    }
    var week = $('#week').text();
    console.log(week);
    $.getJSON("".concat(baseUrl, "api/Booking"))
        .then(function (bookings) {
        bookings.forEach(function (x) {
            if (x.week == week) {
                console.log(x.id);
                $("#".concat(x.hour, "-").concat(x.dayOfWeek)).text("hi");
            }
        });
    });
}
$(function () {
    $('#people').hide();
    $('#bookings').hide();
    $('#decreaseWeek').on('click', function () {
        var week = $('#week').text();
        if (Number(week) > 1) {
            $('#week').text(Number(week) - 1);
            fillBookings();
        }
    });
    $('#increaseWeek').on('click', function () {
        var week = $('#week').text();
        $('#week').text(Number(week) + 1);
        fillBookings();
    });
    $('#showPeople').on("click", function () {
        $('#people').show();
        $('#bookings').hide();
        fillPersonTable();
    });
    $('#showBookings').on("click", function () {
        $('#people').hide();
        $('#bookings').show();
        fillBookings();
    });
});
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDto = void 0;
var PersonDto = /** @class */ (function () {
    function PersonDto(id, age, firstName, lastName, bookingCount) {
        this.id = id;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookingCount = bookingCount;
    }
    return PersonDto;
}());
exports.PersonDto = PersonDto;
},{}]},{},[2,1,3]);
