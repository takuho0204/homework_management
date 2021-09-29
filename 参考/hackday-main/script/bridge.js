const targetTable = document.getElementById("pocket-table");
let pSubjectArray = [];

class PocketTableComponent {
    constructor(_item) {
        for (let i = 1; i <= _item; i++) {
            let pSubjectLine = document.createElement("tr");
            pSubjectLine.classList.add("p__line");

            let pSubjectTime = document.createElement("td");
            pSubjectTime.classList.add("p__time");
            pSubjectTime.textContent = i;

            pSubjectLine.appendChild(pSubjectTime);

            for (let j = 1; j <= 7; j++) {
                let pSubjectItem = document.createElement("td");
                pSubjectItem.classList.add("p__item");

                pSubjectLine.appendChild(pSubjectItem);
            };

            targetTable.appendChild(pSubjectLine);
        };
    };
};

const outputButton = document.getElementById("output-btn");
outputButton.addEventListener("click", () => {
    let timeValue = document.getElementById("subject-time");
    let baseSubjectValue = document.querySelectorAll(".subject__select");
    pSubjectArray.length = 0;
    baseSubjectValue.forEach(item => {
        pSubjectArray.push(item.value);
    });

    let timeLiine = document.querySelectorAll(".p__line");
    for (let i = 0; i < timeLiine.length; i++) {
        timeLiine[i].remove();
    };

    const data = new PocketTableComponent(timeValue.value);
    let targetSubjectBox = document.querySelectorAll(".p__item");
    for (let i = 0; i < targetSubjectBox.length; i++) {
        targetSubjectBox[i].textContent = pSubjectArray[i];
    };

    var elt = document.querySelector("#target");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "時間割表" });
    XLSX.writeFile(wb, "time-table.xlsx");
});