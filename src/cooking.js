function renderCookings() {
  //orders라는 배열과 동기화 되게끔
  var cookingEl = document.getElementById("cookings");
  cookingEl.innerHTML = "";
  cookings.forEach(function (cooking) {
    var liEl = document.createElement("li");
    liEl.textContent =
      cooking.name + " " + cooking.status + " 주문번호:" + cooking.num;
    cookingEl.append(liEl);
  });
}
