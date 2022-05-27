using Microsoft.AspNetCore.Mvc;
using Tennis.DTOs;
using Tennis.Services;
using TennisDb;

namespace Tennis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        public TennisService _TennisService;


        public BookingController(TennisService tennisService)
        {
            _TennisService = tennisService;
        }
        
        [HttpGet]
        public IEnumerable<BookingDto> Persons()
        {
            return _TennisService.GetAllBookings().Select(x => new BookingDto().CopyPropertiesFrom(x)).ToList();
        }
        
        [HttpPost]
        public IActionResult AddBooking([FromBody] BookingDto bookingDto)
        {

            var booking = new Booking().CopyPropertiesFrom(bookingDto);
            _TennisService.InsertBooking(booking);
            return Ok();
        }

    }
}