export function orderManager() {
  this.orders = [];
  this.cookings = [];
  this.servings = [];
}

orderManager.prototype.addOrder = function (menu) {
  this.orders.push(menu);
  this.renderOrders();
};

orderManager.prototype.removeOrder = function (menu) {
  var index = this.orders.indexOf(menu);
  if (index > -1) {
    this.orders.splice(index, 1);
    this.renderOrders();
  }
};

orderManager.prototype.addCooking = function (menu) {
  this.cookings.push(menu);
  this.renderCookings();
};

orderManager.prototype.removeCooking = function (menu) {
  var index = this.cookings.indexOf(menu);
  if (index > -1) {
    this.cookings.splice(index, 1);
    this.renderCookings();
  }
};

orderManager.prototype.addServing = function (menu) {
  this.servings.push(menu);
  this.renderServings();
};

orderManager.prototype.renderOrders = function () {
  var ordersEl = document.getElementById("orders");
  ordersEl.innerHTML = "";
  this.orders.forEach(function (order) {
    var liEl = document.createElement("li");
    liEl.textContent =
      order.name + " " + order.status + " 주문번호:" + order.num;
    ordersEl.append(liEl);
  });
};

orderManager.prototype.renderCookings = function () {
  var cookingEl = document.getElementById("cookings");
  cookingEl.innerHTML = "";
  this.cookings.forEach(function (cooking) {
    var liEl = document.createElement("li");
    liEl.textContent =
      cooking.name + " " + cooking.status + " 주문번호:" + cooking.num;
    cookingEl.append(liEl);
  });
};

orderManager.prototype.renderServings = function () {
  var servingsEl = document.getElementById("servings");
  servingsEl.innerHTML = "";
  this.servings.forEach(function (serving) {
    var liEl = document.createElement("li");
    liEl.textContent =
      serving.name + " " + serving.status + " 주문번호:" + serving.num;
    servingsEl.append(liEl);
  });
};
