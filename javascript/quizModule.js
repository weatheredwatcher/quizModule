/*
	quizModule.js
	Author: David Duggins
	Email: weatheredwatcher@gmail.com
	Project Location: http://github.com/weatheredwatcher/quizModule
	Created: April 27th, 2010
	Last Modified: April 27th, 2010 DWD
*/

function Question(questionType, questionText, questionChoices, questionAnswers, answers){
	
	this.questionType = questionType;
	this.questionText = questionText;
	this.questionChoices = questionChoices.split(" ");
	this.questionAnswers = questionAnswers.split(" ");
	this.answers = answers;
}

Question.prototype.setAnswer(selected) = function {
	this.selected = selected;
	if (this.questionType == 1){ //type 1 = True/False Question Logic
		
	}
	if (this.questionType == 2){ //type 2 = multiple choice/multiple answer logic
		this.answers.push(this.selected);
	}
}
