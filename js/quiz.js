$(document).ready(function () {
//start button
$('#quizBox').hide();
document.getElementById('takeQuizButton').addEventListener('click', startButton);
$('#nextButton').hide();
$('#instructions').hide();
$('#startOverButton').hide();
function startButton() {
  $('#quizBox').show();
  $('#instructions').show();
  $('#message').show();
  $('#welcomeMessage').hide();
  $('#takeQuizButton').hide();
}
//welcome message
let quizGreeting = document.getElementById('welcomeMessage');
let messages = ['rock on', 'play hard', 'make some noise', 'drop the mic'];
function shuffle(array) {
  //for loop to loop through the array
  for (let i = array.length - 1; i >= 0; i--) {
    //will produce number 0 - array length
    let j = Math.floor(Math.random() * (i + 1));
    //produce random number between 0 and 12, with last number decreasing by 1 each time until 0
    [array[i], array[j]] = [array[j], array[i]];//ES6 swap
  }
  return array
}
let welcomeMessage = (`Welcome to the Noteworthy quiz on music trivia and pop culture. Are you ready to ${shuffle(messages)[0]}?`);
quizGreeting.prepend(welcomeMessage);
//styling background when selecting choices
$('#options')
  .on('click', function () {
    $('body').removeClass('normalBodyImage').addClass('dimmedBodyImage');
  });
$('#next')
  .on('click', function () {
    $('body').removeClass('dimmedBodyImage').addClass('normalBodyImage');
  });
//constructor for the bank of questions with questions, options and a correct answer
class QuizQuestion { 
  constructor(question, options, correct) {
    this.question = question;
    this.options = options;
    this.correct = correct;
  }
}
//assigns information to each new instance
let question1 = new QuizQuestion('The single "Thinking Out Loud" by this singer-songwriter became the first to be streamed over 500 million times on Spotify. It has also been viewed more than 1.59 billion times on YouTube as of April 18, 2017.', ["Shawn Mendes", "Ed Sheeran", "2pac"], 'Ed Sheeran');
let question2 = new QuizQuestion('This Canadian singer-songwriter is featured on the Fifty Shades of Grey: Original Motion Picture Soundtrack, with the song “Earned It”. This soundtrack was the seventh best-selling album of 2015 with 2.2 million copies sold worldwide.', ["The Weeknd", "Drake", "Daft Punk"], "The Weeknd");
let question3 = new QuizQuestion('This American singer, songwriter and musician began her career in Memphis, TN singing gospel at her father’s church. She eventually became the most charted female artist in the history of Billboard’s Top 100.', ["Diana Ross", "Tina Turner", "Aretha Franklin"], 'Aretha Franklin');
let question4 = new QuizQuestion('This singer swept the 2019 Grammy Awards by winning 6 awards total. Her Awards included the award for “Record of the Year” with “Bad Guy."', ["Billie Eilish", "Brittany Spears", "Taylor Swift"], "Billie Eilish");
let question5 = new QuizQuestion("In 2019, what artist broke Mariah Carey's record for the most consecutive weeks at number 1 on the Billboard's Hot 100?", ["Beyonce", "Taylor Swift", "Lil Nas X"], "Lil Nas X");
let question6 = new QuizQuestion('In 2018, which chart-topping artist turned down an invitation to perform at the Super Bowl halftime show to stand in solidarity with Colin Kapernick, who was sidelined from the league after taking a knee during the national anthem to protest police brutality?', ["Rihanna", "Jay Z", "John Legend"], "Rihanna");
let question7 = new QuizQuestion('In 2021 this lead singer of the band Bleachers also co-produced the Grammy-winning album Folklore by Taylor Swift', ["Jack White", "Jack Antonoff", "Jack Black"], "Jack Antonoff");
let question8 = new QuizQuestion('This Houston rapper started a viral sensation when her song "Savage" and clever choreography swept TikTok.', ["Cardi B", "Nikki Minaj", "Megan Thee Stallion"], "Megan Thee Stallion");
let question9 = new QuizQuestion('This artist wrote the first verse of "(Sittin on) the Dock of the Bay" in August 1967 while on a houseboat at Waldo Point in Sausalito, California.', ["James Brown", "Otis Redding", "Al Green"], "Otis Redding");
let question10 = new QuizQuestion('This Arkansas-born singer-songwriter was known for his iconic baritone voice, free prison concerts and is considered one of the best-selling music artists of all time with over 90 million records sold worldwide.', ["Johnny Cash", "Jim Morrison", "Jimmi Hendrix"], "Johnny Cash");
//we are pushing each question into an empty array
let questionArray = [];
questionArray.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10); 
//setting a variable to the length of the array of questions for final score
let questionTotal = questionArray.length;
let score = 0; 
//grabbing our html divs
questions = document.getElementById('questions');
optionContainer = document.getElementById('options');
message = document.getElementById('message');
nextButton = document.getElementById('next');
//loading questions
function loadQuestion() {
  let currentQuestion = Math.floor(Math.random() * questionArray.length);//make questions random
  questions.innerText = questionArray[currentQuestion].question;
  questionArray[currentQuestion].options.forEach((item) => {
    let buttonForChoices = document.createElement('button');//make buttons for choices
    buttonForChoices.innerText = item;
    buttonForChoices.setAttribute('value', item);//determine user choice
    optionContainer.append(buttonForChoices);//make choices appear
    buttonForChoices.classList.add('choices', 'text-white');
    $('.correctAnswerPicture').hide();
    $('.incorrectAnswerPicture').hide();
    showInstructions('Please select an answer.');
    buttonForChoices.addEventListener("click", function () {//adding a click event to the choice/options buttons
      if (this.value === questionArray[currentQuestion].correct) {//determine if the user's choice is correct or not
        $('.correctAnswerPicture').show();
        $('#quizBox').hide();
        showMessage("You're a Rockstar!");
        showInstructions('Continue to the next question.');
        $('#nextButton').show();
        score++;
      } else {
        $('.incorrectAnswerPicture').show();
        $('#quizBox').hide();
        showMessage(`Better luck next time!<br> Answer:${questionArray[currentQuestion].correct}`);
        $('#nextButton').show();
        showInstructions('Continue to the next question.');
      }
      questionArray.splice(currentQuestion, 1);//remove the question that has appeared
    })
  })
}
loadQuestion();
//shows whether the user's choice is correct or incorrect 
function showMessage(message) {
  $('#message').html(message);
}
//start over button
let startOverButtonContainer = document.getElementById('startOverButton');
let startOverButton = document.createElement('button');
startOverButton.classList.add('buttons', 'startOverBtn', 'text-white');
let startOverButtonText = document.createTextNode('Start Over');
let startOverButtonAtag = document.createElement('a');
startOverButtonAtag.setAttribute('href', '../html/quiz.html');
startOverButton.appendChild(startOverButtonText);
startOverButtonAtag.appendChild(startOverButton);
startOverButtonContainer.append(startOverButtonAtag);
// displays the users score
function showFinalScore() {
  message.innerText = (`You scored ${score} out of ${questionTotal}!`);
  $('.divToAppear').css({
    "width": "500px"
  });
//creating a high score message and low score message 
  let messageForFinalScore =document.getElementById('messageForFinalScore');
  let highscore = "#slayedIt";
  let lowscore = "#weakSauce";
  (score >= 7 ? messageForFinalScore.append(highscore) :  messageForFinalScore.append(lowscore));
  $('#startOverButton').show();
  $('#messageForFinalScore').css({
    "margin": "4rem"
  });
}
//displays dynamic instructions to the user
function showInstructions(instructions) {
  $('#instructions').html(instructions);
}
// adding a click event to the next button
nextButton.addEventListener('click', function () {
  questions.innerText = " "; 
  let oldChoices = document.querySelectorAll('.choices');  
//cycling through the old choices and removing them
  oldChoices.forEach((item) => { 
    item.remove();
  })
  message.innerText = " ";
//if statement for the end of the quiz to display score and start loading questions over again
  if (questionArray.length == 0) {
    showFinalScore();
    showInstructions('Please start over or continue to the Sign Up page.');
    nextButton.remove();
    $('#pictures').hide();
    $('#nextButton').show();
  } else {
    loadQuestion(); 
    $('#quizBox').show();
    $('#options').show();
    $('#nextButton').hide();
  }
});
})



