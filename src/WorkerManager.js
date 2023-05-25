export function Chef() {
  this.status = "ready";
}
Chef.prototype.isAvailable = function () {
  return this.status == "ready";
};
Chef.prototype.cookAsync = function (menu) {
  var chef = this;
  chef.status = "cooking";
  return new Promise(function (resolve) {
    setTimeout(function () {
      chef.status = "ready";
      resolve();
    }, menu.time);
  });
};

Chef.prototype.findChefAsync = function (chefs) {
  return new Promise(function (resolve) {
    var intervalID = setInterval(function () {
      var availableChefs = chefs.filter(function (chef) {
        return chef.isAvailable();
      });

      if (availableChefs.length > 0) {
        clearInterval(intervalID);
        resolve(availableChefs[0]);
      }
    });
  }, 500);
};

export function Server(time) {
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

Server.prototype.findServerAsync = function (servers) {
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
};
