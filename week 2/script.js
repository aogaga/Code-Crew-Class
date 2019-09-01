/**

Questions 
Options 
Answer

*/


class sam {

	constructor(question, options,  anser){
		this.options = options;
		this.answer = anser;
		this.questionText = question;
	}

	printQuestion(){
		console.log(this.questionText);
	}

	printOptions(){
		for(let i = 0; i < this.options.length; i++){
			console.log(this.options[i]);
		}
	}

	printAnswer(){
		console.log("The correct Answer is " + this.answer);
	}
}


var questionOptions = [
	"A: Olusegun Obsanjo",
	"B: Atiku Abubakar",
	"C: Muhamadu Buhari",
	"D: Anthony Joshua"
];


class whoWantsToBeAMillGame {

	constructor(){

	let ques = new sam("Who is the President of Nigeria ?", questionOptions, questionOptions[2] );


	ques.printQuestion();
	ques.printOptions();
	console.log()
	ques.printAnswer();
	}
}

let miligame = new whoWantsToBeAMillGame();
