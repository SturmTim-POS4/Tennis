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
$(function () {
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
