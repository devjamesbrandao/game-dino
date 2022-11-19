const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

const connection = new signalR.HubConnectionBuilder()
        .withUrl("http://192.168.3.7:5050/hubs/chat")
        .configureLogging(signalR.LogLevel.Information)
        .build();

        async function start() {
            try {
                await connection.start();
                console.log("SignalR Connected.");
            } catch (err) {
                console.log(err);
                setTimeout(start, 5000);
            }
        };

        connection.onclose(async () => {
            
        });

        connection.on('ReceiveMessage', message => {
          if (!dino.classList.contains('jump-animation')) {
            jump();
          }
        });

        // Start the connection.
        start();

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("YOU ARE DEAD! YOUR SCORE: " + score.innerText);
    location.reload();
  }
}, 50);
