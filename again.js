console.log("heellllllo bhaiyooo")

//"" p  ;   ${

console.log("heellllllo bhaiyooo  kesee ho .............");

let a=10;
let b=20;

console.log("the total moneey is",a+b,"dollar");
//instead of using this we can use
console.log(`the total money isssss ${a+b} moneey`)

5==6

age=19
if(age>=18)
    {
        console.log("you can voteeee")
    }

color="red"
if(color==="red")
    {
    console.log("wait kro bhaiii")
    }
else if(color=="yellow")
    {
    console.log("bas todhaaa aur ruko eengine start krkee rkho")
    }
else if(color=="green")
    {
    console.log("chaloooooooo futloooo bhaggggaooooooooo")
    }
else
    {
    console.log("koi dhang ka color dalleeeee bhaiiii")
    }

cornsize="XL";
if(cornsize=="XL")
    {
    console.log("tum rs.500 dede")
    }
else if(cornsize=="L")
    {
    console.log("tum rs. 200 dedo")
    }
else if(cornsize=="M")
    {
    console.log("tu rs. 100 dede")
    }
else if(cornsize=="S")
    {
    console.log("tum rs 50 dede")
    }
else
    {
    console.log("bc yeeh konsa size mang dia")
    }

a=("akunal bisht")
if(a[0]=="a" && a.length>3)
    {
        console.log("its a good string");
    }
else
    {
        console.log("its a badddd string");
    }

if(-69)
    {
        console.log("true");
    }

 else
    {
        console.log("false");
    }

let coloor="red";
switch(coloor)
{
    case "red":
        console.log("rukoooo")
        break;
    case "yellow":
        console.log("todha aur rukoooo")
        break;
    case "green":
        console.log("go go gogogogogogogo")
        break;
    default:
        console.log("bhai yeh kya daldaaa")
}

//alert("someething went wrong");

//prompt("eenteer your nameee");

//console.error("this is an eeeerror");

//firstNameeee=prompt("eenteer your first nameee");
//lastNameee=prompt("eenteer your last nameee");

//console.log("your name is "+ firstNameeee+ " "+lastNameee)

//alert(firstNameeee +" "+ lastNameee +" weelcomeee")
let naam="           kunal bisht        ";
console.log(naam.indexOf("u"))
console.log(naam.toUpperCase().trim())

as="AenaCollege"

let arr=["honda","maruti","xuv"];

let start=["january","june","march","august"];

let tic=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
//loops
//for(let i=1;i<5;i++)
    //{
   // console.log(i);
    //}

    for(let i=1;i<=15;i++)
    {
        if(i%2!=0)
            console.log(i);
    
    }
 for(let i=2;i<=15;i=i+2)
    {
        
            console.log(i);
    
    }

 for(let i=1;i<=10;i++)
    {
            console.log(i*5);
    
    }

//n=prompt("enter the number whose table you want")
//for(let i=1;i<=10;i++)
    //{
     //    console.log(i*n);
    //}
    
//for(let i=1;i<=3;i++)
    //{console.log("outer loo",i);
        //for(j=1;j<=3;j++)
         //   {
       //         console.log(j);
     //       }   
        // }
        //let fav=("dhoom");
      //  let guess=prompt("enter your guess or if you wanna quit type quit");
    //    while((guess!=fav)&&(guess!="quit"))
         //   {
      ///          console.log("wrong guess");
     //           guess=prompt("enter your guess or if you wanna quit type quit");
   //         } 
       // if(guess==fav)
     //       {
   //             alert("congratultions right gueess")
 //           }

let heroes=[["iron man","hulk","falcon"],["ww","flash","cyborg"]];
for(let i=0;i<=heroes.length;i++)
    {
        console.log(i)
        for(let j=0;j<=heroes[i].length;)
            {
                console.log(j)
            }
    }

let studentt={
    name:"kunal",
    class:12,
    age:20,
    grade:"A"
};