
const list = JSON.parse(localStorage.getItem("follow") || "[]");
const ul = document.getElementById("follow-list");
list.forEach(symbol => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "stock.html?symbol=" + symbol;
    a.innerText = symbol;
    li.appendChild(a);
    ul.appendChild(li);
});
