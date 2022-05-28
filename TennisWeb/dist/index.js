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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDO0FBRXpDLFNBQVMsZUFBZTtJQUNwQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ2xCLE1BQU0sQ0FBQyxRQUFRO1FBQ2hCLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLHdDQUF3QztRQUN4QyxlQUFlLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUcsT0FBTyxlQUFZLENBQUM7U0FDNUIsSUFBSSxDQUFDLFVBQUMsTUFBbUI7UUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDWixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtB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