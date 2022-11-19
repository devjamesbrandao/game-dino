namespace Server
{
    public interface IChatClient
    {
        Task ReceiveMessage(string mensagem);
    }
}