namespace Tennis.DTOs;

public class BookingDto
{
    public int Id { get; set; }
    public int DayOfWeek { get; set; }
    public int Hour { get; set; }
    public int Week { get; set; }
    public int PersonId { get; set; }
}