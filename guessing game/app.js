const max=prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess a number");

while(true)
    {
        if(guess=="quit")
            {
                console.log("user quit lol noob");
                break;
            }
        if(guess==random)
            {
                console.log("congratulations and celebrations!!!!!");
                break;
            }
        else if(guess>random)
            {
                guess=prompt("number you guessed is bigger ...try again");
            }
        else if(guess<random)
            {
                guess=prompt("number you guessed is smaller ...try again");
            }
    }