const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("FOR")
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

console.log("WHILE")
let i = 0;
while(i < studentReport.length) {
    
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

    i++;
}

console.log("FOR EACH")
studentReport.forEach(i => {
    if (i < LIMIT) {
        console.log(i);
    }
})


console.log("FOR IN")
for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index])
    }
}


let date = new Date();
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
for (let i = 0; i < DAYS; i++) {
    const futureDay = date.getDay() + i;
    console.log(weekdayNames[futureDay % weekdayNames.length]);
}