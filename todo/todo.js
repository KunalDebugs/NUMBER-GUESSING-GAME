let todo=[];
let req=prompt("enter yout request");

while(true)
    {
        if(req=="quit"){
            console.log("quitting the todo");
            break;
    }

    if(req=="list")
        {
        console.log("the todo consists-");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);}
    }
    
    else if(req=="add"){
        let task=prompt("enter the element you want to add");
        todo.push(task);
        console.log("task added successfully");
    }

    else if(req=="delete"){
        let idx=prompt("enter the index you wanna delete");
        splice(idx,1);
        console.log("task deleted succeessfully");
    }
    else{
        console.log("eenter a valid request");
    }
    req=prompt("enter yout request");
}
