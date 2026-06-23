const scoreInput = document.getElementById("scoreInput");
const calcBtn = document.getElementById("calcBtn");
const results = document.getElementById("results");

calcBtn.addEventListener("click", calculateGrade);

scoreInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        calculateGrade();
    }
});

function calculateGrade(){

    let score = scoreInput.value;

    if(score === "" || isNaN(score) || score < 0 || score > 100){

        results.innerHTML =
        `<p class="error">
            Please enter a valid score between 0 and 100.
        </p>`;

        return;
    }

    score = Number(score);

    let grade = "";
    let description = "";
    let gradeClass = "";

    if(score >= 70){
        grade = "A";
        description = "Excellent";
        gradeClass = "gradeA";
    }
    else if(score >= 60){
        grade = "B";
        description = "Very Good";
        gradeClass = "gradeB";
    }
    else if(score >= 50){
        grade = "C";
        description = "Good";
        gradeClass = "gradeC";
    }
    else if(score >= 40){
        grade = "D";
        description = "Pass";
        gradeClass = "gradeD";
    }
    else{
        grade = "F";
        description = "Fail";
        gradeClass = "gradeF";
    }

    results.innerHTML = `
        <h2>Result</h2>
        <br>
        <p><strong>Score Entered:</strong> ${score}</p>
        <br>
        <p class="${gradeClass}">
            <strong>Grade:</strong> ${grade}
        </p>
        <br>
        <p><strong>Remark:</strong> ${description}</p>
    `;

    scoreInput.value = "";
    scoreInput.focus();
}
