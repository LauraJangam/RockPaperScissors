document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;


function user(){
    var userChoice = this.id;
    alert("User: " + userChoice)

    var computerChoice = Math.floor(Math.random() * 3) + 1;
         if (computerChoice = 1) {
             computerChoice = "rock";
          }else if(computerChoice = 2) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          }; 

    alert("Computer: " + computerChoice);

    alert(compare(userChoice, computerChoice)); 

    function compare(choice1, choice2) {
    
		    if (choice1 === choice2) {
            return "The result is a tie!";
        }
 
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock wins!";
            }else{
                return "Paper wins!";
            }
				}
 
         if (choice1 === "paper") {
             if (choice2 === "rock") {
                 return "Paper wins!";
              } else {
                  return "Scissors wins!";
              }
		     }
		
		     if (choice1 === "scissors") {
             if (choice2 === "rock") {
                 return "Rock wins!";
             } else {
                 return "Scissors wins!";
            }
        }
    }
}