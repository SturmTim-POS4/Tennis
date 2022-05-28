using TennisDb;

namespace Tennis.DTOs;

public class PersonDto
{
    public int Id { get; set; }
    public int Age { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public int? BookingCount { get; set; }
    
    public static PersonDto FromEntity(Person person) {
        return new PersonDto {
            Id = person.Id,
            Age = person.Age,
            FirstName = person.FirstName,
            LastName = person.LastName,
            BookingCount = person.Bookings?.Count
        };
    }
}