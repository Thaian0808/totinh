document.getElementById("noButton").addEventListener("mouseover", function () {
  let x = Math.random() * (window.innerWidth - this.clientWidth);
  let y = Math.random() * (window.innerHeight - this.clientHeight);
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
});

document.getElementById("noButton").addEventListener("click", function () {
  this.style.transform = "scale(1.5)";
  document.getElementById("message").style.display = "block";
});
document.getElementById("noButton").addEventListener("click", function () {
  this.style.transform = "scale(1.5)";
  let message = document.getElementById("message");
  message.style.display = "block";
  message.style.position = "absolute";
  message.style.top = "60px"; // Điều chỉnh vị trí xuống dưới nút "Có"
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";
});
document.getElementById("noButton").addEventListener("click", function () {
  this.style.transform = "scale(1.5)";
  let message = document.getElementById("message");
  message.style.display = "block";
  message.innerHTML = `Em chắc chưa? <br>
        <button onclick="alert('Yay! Anh yêu em ❤️')" style="background-color: green; padding: 10px 20px; margin: 10px; border: none; color: white; font-size: 16px; border-radius: 5px;">Có</button>
        <button onclick="alert('Thôi đừng mà 😢')" style="background-color: red; padding: 10px 20px; margin: 10px; border: none; color: white; font-size: 16px; border-radius: 5px;">Không</button>`;
});
