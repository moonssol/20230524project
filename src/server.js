function Server(time) {
  this.status = "ready";
  this.time = time;
}
Server.prototype.isAvailable = function () {
  return this.status == "ready";
};
Server.prototype.serveAsync = function () {
  var server = this;
  server.status = "serving";
  return new Promise(function (resolve) {
    setTimeout(function () {
      server.status = "ready";
      resolve();
    }, server.time);
  });
};
function findserverAsync(servers) {
  return new Promise(function (resolve) {
    var intervalID = setInterval(function () {
      var availableservers = servers.filter(function (server) {
        return server.isAvailable();
      });

      if (availableservers.length > 0) {
        clearInterval(intervalID);
        resolve(availableservers[0]);
      }
    });
  }, 500);
}
