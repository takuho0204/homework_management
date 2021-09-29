const subjectSubmitButton = document.getElementById("subject-submit");
const inputSubmit = document.getElementById("input-submit");
const subjectList = document.querySelector(".form__subject__list");
const tableArea = document.querySelector(".table__area");
let subjectArray = [];

class SubjectListItem {
    constructor(_subjectName) {
        let subjectListItem = document.createElement("div");
        subjectListItem.classList.add("form__subject__listitem");

        let deleteButton = document.createElement("i");
        deleteButton.classList.add("fas", "fa-times-circle");

        let subjectListItemText = document.createElement("p");
        subjectListItemText.setAttribute("id", "subject-value")
        subjectListItemText.classList.add("form__subject__listitem__text");
        subjectListItemText.dataset.value = _subjectName;
        subjectListItemText.textContent = _subjectName;

        subjectListItem.appendChild(deleteButton);
        subjectListItem.appendChild(subjectListItemText);
        subjectList.appendChild(subjectListItem);

        deleteButton.addEventListener("click", _target => {
            subjectListItem.remove();
        });
    };
};

class TableComponent {
    constructor(_time) {
        for (let i = 1; i <= _time; i++) {
            let subjectLine = document.createElement("tr");
            subjectLine.classList.add("subject__line");

            let subjectTime = document.createElement("td");
            subjectTime.classList.add("time__box", "table__subject");
            subjectTime.textContent = i;

            subjectLine.appendChild(subjectTime);

            for (let j = 1; j <= 7; j++) {
                let subjectItem = document.createElement("td");
                subjectItem.classList.add("subject__item", "table__subject");

                let subjectInput = document.createElement("select");
                subjectInput.classList.add("subject__select");

                let defaultOption = document.createElement("option");
                defaultOption.setAttribute("value", "-----");
                defaultOption.textContent = "-----";
                defaultOption.selected = true;

                subjectInput.appendChild(defaultOption);
                subjectItem.appendChild(subjectInput);
                subjectLine.appendChild(subjectItem);
            };
            tableArea.appendChild(subjectLine);
        };
    };
    addOption() {
        let subjectSelectBox = document.querySelectorAll(".subject__select");
        subjectSelectBox.forEach(item => {
            for (let i = 0; i < subjectArray.length; i++) {
                let selectBoxOption = document.createElement("option");
                selectBoxOption.setAttribute("value", subjectArray[i]);
                selectBoxOption.textContent = subjectArray[i];
                item.appendChild(selectBoxOption);
            };
        });
    };
};

subjectSubmitButton.addEventListener("click", () => {
    let subjectInputText = document.getElementById("subject-input");
    if (subjectInputText.value != "") {
        let subjectItem = new SubjectListItem(subjectInputText.value);
    } else { };
});

inputSubmit.addEventListener("click", () => {
    let subjecValues = document.querySelectorAll("#subject-value");
    subjectArray.length = 0;
    for (let i = 0; i < subjecValues.length; i++) {
        subjectArray.push(subjecValues[i].dataset.value);
    };

    let timeValue = document.getElementById("subject-time");
    let timeLine = document.querySelectorAll(".subject__line");
    for (let i = 0; i < timeLine.length; i++) {
        timeLine[i].remove();
    };

    const table = new TableComponent(timeValue.value);
    table.addOption();
});