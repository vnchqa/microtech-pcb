function calculatePrice() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let qty = document.getElementById('qty').value;
    let layers = document.getElementById('layers').value;

    if (!width || !height || !qty) { alert("Введите параметры платы"); return; }

    let area = width*height/100;
    let base = area*4;
    if(layers==2) base*=1.2;
    if(layers==4) base*=1.6;
    if(layers==6) base*=2;

    let price = Math.round(base*qty);
    document.getElementById('price').innerText = "≈ "+price+" ₽";
}
