function showTime() {
    let semestr = new Date(2025, 8, 1);
    let birthday = new Date(2025,11,22);
    let days = birthday.getDate() - semestr.getDate();
    let months = birthday.getMonth() - semestr.getMonth();
    let year = birthday.getFullYear() - semestr.getFullYear();
    document.getElementById("time").innerHTML = "Days: " + days + " months: " + months + " years: " + year;
}