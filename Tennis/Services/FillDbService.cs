using TennisDb;

namespace Tennis.Services;

public class FillDbService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;


    public FillDbService(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using IServiceScope scope = _serviceProvider.CreateScope();
        
        var db = scope.ServiceProvider.GetRequiredService<TennisDbContext>();

        db.Database.EnsureDeleted();
        db.Database.EnsureCreated();

        var initialPeople = new List<Person>{
            new(){
                FirstName = "Hansi",
                LastName = "Huber",
                Age = 66
            },
            new(){
                FirstName = "Fritzi",
                LastName = "Müller",
                Age = 23
            },
            new(){
                FirstName = "Susi",
                LastName = "Berger",
                Age = 31
            }
        };

        var initialBookings = new List<Booking>{
            new Booking{
                Week = 20,
                DayOfWeek = 3,
                Hour = 12,
                PersonId = 2
            },
            new Booking{
                Week = 20,
                DayOfWeek = 4,
                Hour = 12,
                PersonId = 1
            },
            new Booking{
                Week = 20,
                DayOfWeek = 2,
                Hour = 14,
                PersonId = 3
            },
            new Booking{
                Week = 21,
                DayOfWeek = 1,
                Hour = 10,
                PersonId = 3
            },
            new Booking{
                Week = 21,
                DayOfWeek = 2,
                Hour = 10,
                PersonId = 3
            },
            new Booking{
                Week = 21,
                DayOfWeek = 3,
                Hour = 15,
                PersonId = 1
            },
            new Booking{
                Week = 21,
                DayOfWeek = 4,
                Hour = 15,
                PersonId = 2
            }
        };

        db.Persons.AddRange(initialPeople);
        db.SaveChanges();
        db.Bookings.AddRange(initialBookings);
        db.SaveChanges();
        
        int nrPersons = db.Persons.Count();
        Console.WriteLine($"Number of persons in database: {nrPersons}");
        int nrBookings = db.Bookings.Count();
        Console.WriteLine($"Number of bookings in database: {nrBookings}");

        return Task.Run(() => { Console.WriteLine("TennisBackgroundService is executing"); }, stoppingToken);
    }
}