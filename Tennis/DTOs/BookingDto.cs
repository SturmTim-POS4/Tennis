using TennisDb;

namespace Tennis.DTOs;

public class BookingDto
{
    public int Id { get; set; }
    public int DayOfWeek { get; set; }
    public int Hour { get; set; }
    public int Week { get; set; }
    public int PersonId { get; set; }
    public PersonDto? Person { get; set; }
    
    public static BookingDto FromEntity(Booking booking) {
        return new BookingDto {
            Id = booking.Id,
            DayOfWeek = booking.DayOfWeek,
            Hour = booking.Hour,
            Week = booking.Week,
            PersonId = booking.PersonId,
            Person = PersonDto.FromEntity(booking.Person)
        };
    }
}