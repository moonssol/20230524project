function renderOrders() {
  //orders라는 배열과 동기화 되게끔
  var ordersEl = document.getElementById("orders");
  ordersEl.innerHTML = "";
  orders.forEach(function (order) {
    var liEl = document.createElement("li");
    liEl.textContent =
      order.name + " " + order.status + " 주문번호:" + order.num;
    ordersEl.append(liEl);
  });
}
