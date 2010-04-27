/*
	quizModule.js
	Author: David Duggins
	Email: weatheredwatcher@gmail.com
	Project Location: http://github.com/weatheredwatcher/quizModule
	Created: April 27th, 2010
	Last Modified: April 27th, 2010 DWD
*/
Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(testArr[i])) return false;
        }
        if (this[i] !== testArr[i]) return false;
    }
    return true;
}

function Question(questionType, questionText, questionChoices, questionAnswers, answers){
	
	this.questionType = questionType;
	this.questionText = questionText;
	this.questionChoices = questionChoices.split("|");
	this.questionAnswers = questionAnswers.split(",");
	this.answers = answers;
	

}

Question.prototype.checkAnswer = function(){
	var myAnswers = [];
	for(var i=0; i<document.answers.answer.length; ++i){
	if(document.answers.answer[i].checked){
	
		myAnswers.push(i);
	}
	}
	
	if(this.questionAnswers.toString() == myAnswers.toString()){
		alert("true");
	}else {
		alert("false");
	}
	//alert("Guesses:"+ myAnswers + "Answers:" + this.questionAnswers);

}
Question.prototype.displayQuestion = function(){
		myHTMLOutput = "<h4>" + this.questionText + "</h4><form name='answers'>";
		for ( var i=0, len=this.questionChoices.length; i<len; ++i ){
		  myHTMLOutput += '<input type="checkbox" name="answer" value="' + i + '" />' + this.questionChoices[i] + "<br />";
		 
		}
		 myHTMLOutput += '<input type="button" value="Check" onClick="myQuestion.checkAnswer()" />';
		document.write(myHTMLOutput);
	
}

var myQuestion = new Question(2,"What was the question again?", "My,What Big teeth you have!|You|Us|Them", "0,2,3");
myQuestion.displayQuestion();