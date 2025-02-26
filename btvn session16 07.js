let math = +prompt("Nhập vào điểm Toán");
let physics = +prompt("Nhập vào điểm vật lý");
let chemistry = +prompt("Nhập vào điểm hóa");
let avg = (math + physics + chemistry) / 3;
document.write(`Điểm trung bình của 3 môn học là: ${avg}`);