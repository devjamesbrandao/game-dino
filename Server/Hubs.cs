using Microsoft.AspNetCore.SignalR;

namespace Server
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage()
        {
            await Clients.All.ReceiveMessage("Pula Rex!");
        }
    }
}