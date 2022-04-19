MinecraftAPI.getServerStatus("hglabor.de", function (err, status) {
  if (err) {
    return (document.querySelector(".server-status").innerHTML =
      "Error loading status");
  }
  document.querySelector(".server-online").innerHTML = status.online
    ? "up"
    : "down";
  document.querySelector(
    ".server-image"
  ).innerHTML = `<img src="${status.favicon}">`;
});
