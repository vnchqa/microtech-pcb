/* Анимации появления */
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* Калькулятор PCB */
function calculatePCB(){
const width = parseFloat(document.getElementById("width").value);
const height = parseFloat(document.getElementById("height").value);
const quantity = parseInt(document.getElementById("quantity").value);
const layers = parseInt(document.getElementById("layers").value);
if(!width || !height || !quantity || !layers){ alert("Введите все параметры"); return;}
const area = (width * height)/100;
const basePrice = area * 0.05;
const total = basePrice * quantity * layers * 1.5;
document.getElementById("price").innerText = "Примерная цена: $" + total.toFixed(2);
}

/* Фейковая оплата */
function fakePayment(event){
event.preventDefault();
document.querySelector(".payment-box").style.display="none";
document.querySelector(".success-message").style.display="block";
window.scrollTo({top:0, behavior:"smooth"});
}
