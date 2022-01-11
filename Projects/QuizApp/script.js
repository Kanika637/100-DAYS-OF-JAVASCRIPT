// CREATING  quiz class
class Quiz{
    constructor(questions){
        this.score=0;
        this.questions=0;
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

      isCorrectAnswer(choices){
          return this.answer===choices;
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



