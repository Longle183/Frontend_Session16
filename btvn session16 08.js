let a = prompt("Nhập số thứ nhất:");
let b = prompt("Nhập số thứ hai:");
let c = prompt("Nhập số thứ ba:");
if (a !== b && b !== c && a !== c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    alert("Số lớn nhất trong ba số là: " + max);
} else {
    alert("Vui lòng nhập ba số khác nhau.");
}
