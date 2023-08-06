const expandIcon = document.querySelectorAll(".expandIcon");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
console.log(answers);

expandIcon.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    answers.forEach((answer, index) => {
      if (i === index) {
        answer.classList.toggle("active");
      } else {
        answer.classList.remove("active");
      }
    });
    questions.forEach((question, index) => {
        if (i === index) {
        question.classList.toggle("question-active");
        }else{
            question.classList.remove("question-active");
        }
      });
  });

  
});

