using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IHubContext<ChatHub, IChatClient> _chatHub;

    public WeatherForecastController(IHubContext<ChatHub, IChatClient> chatHub)
    {
        _chatHub = chatHub;
    }

    [HttpGet(Name = "Pula")]
    public async Task Get()
    {
        await _chatHub.Clients.All.ReceiveMessage("Pula Rex!");
    }
}
