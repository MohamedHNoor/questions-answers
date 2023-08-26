//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// const articles = document.querySelectorAll(".question");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     articles.forEach(function (article) {
//       if (article !== question) {
//         article.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
