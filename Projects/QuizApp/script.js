// CREATING  quiz class
class Quiz{
    constructor(questions){
        this.score=0;
        this.questions=questions;
        this.questionIndex=0;

    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;

        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex===this.questions.length;
    }
  }

  //CREATE A QUESTION CLASS

  class Question{
      constructor(text,choices,answer){
          this.text=text;
          this.choices=choices;
          this.answer=answer;

      }

      isCorrectAnswer(choice){
          return this.answer===choice;
      }
  }


  //DISPLAY QUESTION

  function displayQuestion(){
      if(quiz.isEnded()){
          showScores();
      }else{
          let quesElement=document.getElementById("question");
          quesElement.innerHTML=quiz.getQuestionIndex().text;

          //SHOW OPTIONS

          let choices=quiz.getQuestionIndex().choices;
          for(let i=0;i<choices.length;i++){
              let choiceElement=document.getElementById("choice" + i);
              choiceElement.innerHTML=choices[i];
              guess("btn" + i,choices[i]);
          }

          showProgress();
      }
  };

  //GUESS FUNCTION

  function guess(id,guess){
      let button=document.getElementById(id);
      button.onclick=function(){
          quiz.guess(guess);
          displayQuestion();
      }

  }

  //SHOW PROGRESS OF QUIZ

  function showProgress(){
      let currentQuestionNumber=quiz.questionIndex+1;
      let progressElement=document.getElementById("progress")

      progressElement.innerHTML=`Question ${currentQuestionNumber} of ${quiz.questions.length}`;

  }

  //SHOW SCORE

  function showScores(){
      let quizEndHTML=`
      <h1>Quiz Completed </h1>
      <h2 id="score"> You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
      <div class="quiz-repeat">
      <a href="index.html">Take Quiz Again</a>
      </div> 
      `;

    let quizElement=document.getElementById("quiz");
    quizElement.innerHTML=quizEndHTML;
    }

    // CREATE QUIZ QUESTIONS

    let questions=[
        new Question(
            "Hyper Text Markup Language Stands For?",
            ["JQuery","XHTML","CSS","HTML"],"HTML" 

        ),
        new Question(
            "Cascading Style sheet stands for?",["HTML","JQuery","CSS","XML"],"CSS"

        ),
        new Question(
            "Which is a  Javascript Framework?",["React","Laravel","Django","Sass"],"React"

        ),
        new Question(
            "Which is a backend language?",["PHP","HTML","React","All"],"PHP"

        ),
        new Question(
            "Which is best for Artificial intelligence",["React","Laravel","Python","Sass"],"Python"

        )


    ];

    let quiz=new Quiz(questions);

    // DISPLAY QUESTIONS

    displayQuestion();





