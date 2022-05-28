using Microsoft.AspNetCore.Mvc;
using Tennis.DTOs;
using Tennis.Services;

namespace Tennis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        public TennisService _TennisService;


        public PersonController(TennisService tennisService)
        {
            _TennisService = tennisService;
        }

        [HttpGet]
        public IEnumerable<PersonDto> Persons()
        {
            return _TennisService.GetAllPeople()
                .Select(PersonDto.FromEntity)
                .ToList();
        }
    }
}