namespace TennisDb;

public class Person
{
    public int Id { get; set; }
    public int Age { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public List<Booking> Bookings { get; set; }
}