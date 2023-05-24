function renderServings() {
  //orders라는 배열과 동기화 되게끔
  var servingsEl = document.getElementById("servings");
  servingsEl.innerHTML = "";
  servings.forEach(function (serving) {
    var liEl = document.createElement("li");
    liEl.textContent =
      serving.name + " " + serving.status + " 주문번호:" + serving.num;
    servingsEl.append(liEl);
  });
}
