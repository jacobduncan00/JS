// Arguments are option in JavaScript

function pair(x,y){
  if(arguments.length !== 2){
    throw new Error("This function takes 2 arguments!");
  } else {
    console.log("You entered " + arguments.length + " arguments!");
  }
}

pair(2,2);
pair(1);