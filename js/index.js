$(document).ready(function () {
  //making random music notes appear on screen
  let noteCount = 0;
  function createNote() {
    let note = document.createElement('div');
    noteCount++;
    note.setAttribute('class', 'musicNote');
    note.style.left = Math.floor(Math.random() * 100) + 1 + "%";
    note.style.top = Math.floor(Math.random() * 100) + 1 + "%";
    $(note).appendTo('#content');
    if (noteCount < 15) {
      setTimeout(createNote, 950);
    };
  }
  createNote();
  //clickable image links for quiz and sign-up page
  $('#quizBox').mouseenter(function () {
    $("#takeQuizButton").addClass("hover").attr({
      src: "images/takeQuizPage.png",
      alt: "Take the Quiz"
    });
  })
  $('#quizBox').mouseleave(function () {
    $("#takeQuizButton").removeClass("hover").attr({
      src: "images/takeQuizButton.png",
      alt: "Take the Quiz"
    });
  })
  $('#signUpBox').mouseenter(function () {
    $("#signUpNowButton").addClass("hover").attr({
      src: "images/signUpSmall.png",
      alt: "Sign Up Now!"
    });
  })
  $('#signUpBox').mouseleave(function () {
    $("#signUpNowButton").removeClass("hover").attr({
      src: "images/signUpButton.png",
      alt: "Sign Up Now!"
    });
  })
})