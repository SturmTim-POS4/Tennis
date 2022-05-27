using Microsoft.EntityFrameworkCore;
using TennisDb;

namespace Tennis.Services;

public class TennisService
{
    private TennisDbContext _db;

    public TennisService(TennisDbContext db)
    {
        _db = db;
    }

    public IEnumerable<Person> GetAllPeople()
    {
        return _db.Persons.Include(x => x.Bookings).AsEnumerable();
    }
    
    public IEnumerable<Booking> GetAllBookings()
    {
        return _db.Bookings.AsEnumerable();
    }
    
    public Booking InsertBooking(Booking booking)
    {
        _db.Bookings.Add(booking);
        _db.SaveChanges();
        return booking;
    }
}