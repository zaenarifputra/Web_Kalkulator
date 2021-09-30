// Membuat sebuah objek dengan nama kalkulator yang di dalamnya terdapat property yang menggambarkan data dan kondisi dari kalkulatornya 
// Seperti displayNumber, operator, firstNumber, dan waitingForSecondNumber
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};
// selanjutnya kita buat fungsi - fungsi umum yang dilakukan kalkulator seperti meng-update angka pada layar dan menghapus data 
//pada kalkulator.
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}
// Lalu kita buat juga membuat fungsi untuk memasukkan angka ke dalam nilai displayNumber kalkulator.
function inputDigit(digit) {
    if(calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}
// buat variabel buttons dengan menginisialisasikan nilai seluruh elemen button yang ada, dan berikan event click pada tiap elemennya. 
// Untuk mendapatkan nilai seluruh elemen button kita gunakan querySelectorAll(“.button”) kemudian kita looping nilainya 
//dan berikan eventclickpada tiap itemnya.
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {

        //mendapatkan objek elemen yang diklik
        const target = event.target;

        if(target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay()
    });
}
// Fungsi inverseNumber() cukuplah simple karena kita hanya perlu melakukan perkalian displayNumber dengan -1,
// terkecuali jika displayNumber masih bernilai ‘0’ maka perkalian tidak akan dilakukan.
function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}
// selanjutnya kita akan membuat fungsi untuk menetapkan sebuah operator, baik itu + atau - pada kalkulator
function handleOperator(operator) {
    if (!calculator.waitimgForSecondNumber) {
        calculator.operator = operator;
        calculator.waitimgForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0'
    } else {
        alert('Operator sudah ditetapkan')
    }
}
// Kita buat fungsi terakhir yakni performCalculation().
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    }

    if (calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
    calculator.displayNumber = result;
}