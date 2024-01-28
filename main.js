/**
 * DOM tới id btnThemSo để thêm giá trị được nhập ở input vào mảng arrNumber
 */
let arrNumber = [];
document.getElementById("btnThemSo").onclick = function () {
    let value = document.getElementById("inputNumber").value * 1;
    arrNumber.push(value)
    document.getElementById("txtNumber").innerHTML = arrNumber;
}



//Bài 1: Tính Tổng Các Số n
/**
 * B1: lấy giá trị từ mảng arrNumber
 * B2: dùng vòng lặp để kiểm tra từng phần tử trong mảng, nếu là số nguyên thì cộng vào biến sum
 * B3: in ra màn hình kết quả của sum
 */
document.getElementById("btnTinhTong").onclick = function () {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            sum += arrNumber[i]
        }
    }
    document.getElementById("txtTongDuong").innerHTML = "Tổng số dương là : " + sum;
}



// Bài 2: Đếm Số Dương
/**
 * B1: Lấy giá trị từ mảng arrNumber
 * B2: Sử dụng vòng lặp để kiểm tra các phần tử trong mảng, nếu là số dương thì tăng biến đếm count lên 1 đơn vị
 * B3: in ra màn hình kết quả của count
 */
document.getElementById("btnDemSoDuong").onclick = function () {
    let count = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtDemSoDuong").innerHTML = "Có " + count + " số dương"
}


// Bài 3: Tìm số nhỏ nhất
/**
 * B1: lấy giá trị từ mảng arrNumber
 * B2: gán giá trị đầu tiên của mảng cho biến tạm
 *      + Sử dụng vòng lặp để so sánh các phần tử còn lại trong mảng, nếu phần tử đó nhỏ hơn biến tạm thì sẽ gán biến đó cho biến tạm
 * B3: xuất màn hình giá trị nhỏ nhất temp
 */
document.getElementById("btnSoNhoNhat").onclick = function () {
    let temp = arrNumber[0];
    for (let i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] < temp) {
            temp = arrNumber[i];
        }
    }
    document.getElementById("txtSoNhoNhat").innerHTML = "Số nhỏ nhất là : " + temp;
}




// Bài 4: Tìm số dương nhỏ nhất
/**
 *  B1: lấy giá trị từ mảng arrNumber
 *  B2: tạo biến min và gán giá trị có thuộc tính infinity(đại diện cho 1 số vô cùng)
 *      + Sử dụng vòng lặp, gán giá trị đầu tiên của mảng cho 1 biến number
 *      + kiểm tra number phải lớn hơn 0 và number nhỏ hơn biến min thì gán giá trị number đó cho biến min
 * B3: xuất màn hình số dương nhỏ nhất min
 */
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
    let min = Infinity;
    for (let i = 0; i < arrNumber.length; i++) {
        let number = arrNumber[i]
        if (number > 0 && number < min) {
            min = number;
        }
    }
    if (min === Infinity) {
        document.getElementById("txtSoDuongNhoNhat").innerHTML = "Không có số dương nào trong mảng";
    } else {
        document.getElementById("txtSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là : " + min;
    }
}




// Bài 5: Tìm số chẵn cuối cùng
/**
 * B1: lấy giá trị từ mảng arrNumber
 * B2: Tạo 1 biến value để chứa số chẵn cuối cùng
 *      + Sử dụng vòng lặp để kiểm tra các phần tử trong mảng. Nếu phần tử là số chẵn thì sẽ gán vào biến value
 * B3: In kết quả ra màn hình số chẵn cuối cùng
 */
document.getElementById("btnSoChanCuoi").onclick = function () {
    let value = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 == 0) {
            value = arrNumber[i]
        }
    }
    console.log(value)
    document.getElementById("txtSoChanCuoi").innerHTML = "Số chẵn cuối cùng là : " + value;
}




//Bài 6: Đổi chỗ
/**
 * B1: tạo 1 biến tạm temp và 1 mảng rỗng arr[]
 * B2: DOM tới vị trí 1 và 2 để lấy giá trị trong input
 * B3: Gán value1 cho temp, gán value2 cho value1 và sau đó gán giá trị temp cho value2
 * B4: hiện thị kết quả sau khi đổi chỗ ra màn hình
 */
document.getElementById("btnDoiCho").onclick = function () {
    let temp = 0;
    let arr = [];
    let value1 = document.getElementById("inputValue1").value;
    let value2 = document.getElementById("inputValue2").value;
    arr.push(value1, value2);
    temp = value1;
    value1 = value2;
    value2 = temp;
    document.getElementById("txtDoiCho").innerHTML = "Mảng sau khi đổi là : Vị trí 1 : " + value1 + ", vị trí 2 là : " + value2;
}




//Bài 7: Sắp xếp tăng dần
/**
 * B1: lấy giá trị từ mảng arrNumber
 * B2: sử dụng vòng lặp lồng nhau để tìm so sánh 2 số arrNumber[i] và arrNumber[j]
 * B3: Sử dụng câu lệnh điều kiện để kiểm tra nếu arrNumber[i] > arrNumber[j] thì gán arrNumber[i] cho biến tạm temp sau đó gán arrNumber[j] cho arrNumber[i] và gán biến tạm temp cho arrNumber[j] để tiếp tục kiểm tra
 * B4: In kết quả mảng vừa sắp xêp được ra màn hình
 */

document.getElementById("btnSapXep").onclick = function () {
    for (let i = 0; i < arrNumber.length - 1; i++) {
        for (let j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                let temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    document.getElementById("txtSapXep").innerHTML = "Mảng sau khi sắp xếp là : " + arrNumber;
}



//Bài 8: tìm số nguyên tố đầu tiên
/**
 * B1: lấy giá trị từ mảng arrNumber
 * B2: 
 */
document.getElementById("btnSoNguyenToDau").onclick = function () {
    function kiemTraSNT(n) {
        let check = 1;
        if (n < 2) {
            return check = 0;
        }
        let i = 2;
        while (i < n) {
            if (n % 2 == 0) {
                check = 0;
                break;
            }
            else {
                document.getElementById("txtSoNguyenToDau").innerHTML = "Không có số nguyên tố"
            }
            i++;
        }
        return check;
    }
    for (let i = 0; i < arrNumber.length; i++) {
        if (kiemTraSNT(arrNumber[i]) == 1) {
            document.getElementById("txtSoNguyenToDau").innerHTML = "Số " + arrNumber[i] + " là số nguyên tố đầu tiên"
            break;
        }
        else {
            document.getElementById("txtSoNguyenToDau").innerHTML = "Không có số nguyên tố"
        }
    }
}



//Bài 9: Đếm số nguyên
/**
 * B1: tạo 1 mảng rỗng để chứa giá trị từ ô input số nguyên
 * B2: tạo 1 hàm để xử lí DOM tới input chứa số vừa nhập để lưu giá trị vào mảng
 * B3: tạo 1 hàm, sử dụng vòng lặp và thuộc tính Number.isInteger() để kiểm tra các giá trị trong mảng có thuộc số nguyên không. Nếu là số nguyên thì tăng biến đếm lên 1 đơn vị
 * B4: xuất kết quả count ra màn hình 
 */
let arr = [];
document.getElementById("btnThemSoNguyen").onclick = function () {
    let value = document.getElementById("inputDemSoNguyen").value * 1;
    arr.push(value)
    document.getElementById("txtThemSoNguyen").innerHTML = arr;
}
document.getElementById("btnDemSoNguyen").onclick = function(){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i])){
            count++;
        }
    }
    document.getElementById("txtSoNguyen").innerHTML = "Có " + count + " số nguyên"
}


//Bài 10: So sánh số lượng số âm và số dương
/**
 * B1: tạo 2 biến tạm là soAm và soDuong
 * B2: lấy giá trị từ mảng arrNumber, sử dụng vòng lặp để kiểm tra từng phần tử trong mảng, nếu arrNumber[i] < 0 thì biến soAm++ và ngược lại
 * B3: tạo 1 hàm compare để kiểm tra từng trường hợp soAm ><= soDuong
 * B4: in ra màn hình kết quả so sánh
 */

document.getElementById("btnSoSanh").onclick = function(){
    let soAm = 0;
    let soDuong = 0;
    for(let i = 0; i< arrNumber.length; i++){
        if(arrNumber[i] < 0){
            soAm++;
        }
        else{
            soDuong++;
        }
    }
    function compare(am, duong){
        if(am > duong){
            return "Số âm > Số dương";
        }
        else if(am < duong){
            return "Số âm < Số dương";
        }
        else{
            return "Số âm = Số dương"
        }
    }
    document.getElementById("txtSoSanh").innerHTML = compare(soAm, soDuong)
}