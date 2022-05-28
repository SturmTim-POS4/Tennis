import {PersonDto} from "./person";
import {BookingDto} from "./booking";

const baseUrl = "http://localhost:5000/";

function fillPersonTable() {
    $("#tblPeople").empty()
        .append("<tr>\n" +
        "            <th>Nachname</th>\n" +
        "            <th>Vorname</th>\n" +
        "            <th>Alter</th>\n" +
        "            <th>#Reservierungen</th>\n" +
        "        </tr>")
    $.getJSON(`${baseUrl}api/Person`)
        .then((people: PersonDto[]) => {
            people.forEach(x => {
                const row = $("<tr>");
                row.append($("<td>").text(x.lastName));
                row.append($("<td>").text(x.firstName));
                row.append($("<td>").text(x.age));
                row.append($("<td>").text(x.bookingCount));
                $("#tblPeople").append(row);
            })
        })
}

function fillBookings() {
    const bookingHeader = "<tr>\n" +
        "            <th></th>\n" +
        "            <th>Mo</th>\n" +
        "            <th>Di</th>\n" +
        "            <th>Mi</th>\n" +
        "            <th>Do</th>\n" +
        "            <th>Fr</th>\n" +
        "            <th>Sa</th>\n" +
        "            <th>So</th>\n" +
        "   </tr>"
    
    $("#tblBookings").empty()
        .append(bookingHeader)
    
    for (let i = 10; i <= 22; i++) {
        const row = $("<tr>");
        row.append($("<td>").text(i));
        for (let j = 0; j < 7; j++) {
            row.append($("<td>").text("").attr("id", `${i}-${j}`));
        }
        $("#tblBookings").append(row);
    }
    const week = $('#week').text()
    console.log(week)
    $.getJSON(`${baseUrl}api/Booking`)
        .then((bookings: BookingDto[]) => {
            bookings.forEach(x => {
                if (x.week == week){
                    console.log(x.id)
                    $(`#${x.hour}-${x.dayOfWeek}`).text(x.person.firstName + " " + x.person.lastName)
                }
            })
        })
}

$(() => {
    $('#people').hide();
    $('#bookings').hide();
    $('#decreaseWeek').on('click', () => {
        const week = $('#week').text();
        if (Number(week) > 1) {
            $('#week').text(Number(week) - 1);
            fillBookings();
        }
    });
    $('#increaseWeek').on('click', () => {
        const week = $('#week').text();
        $('#week').text(Number(week) + 1);
        fillBookings();
    });
    
    $('#showPeople').on("click", function () {
        $('#people').show();
        $('#bookings').hide();
        fillPersonTable();
    })
    $('#showBookings').on("click", function () {
        $('#people').hide();
        $('#bookings').show();
        fillBookings();
    })
})