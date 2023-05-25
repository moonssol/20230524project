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

function findChefAsync(chefs) {
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
}
