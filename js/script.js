// make a fork

/* ### Question 1 OK :D
Give the below function's `name` parameter a default value of `"John"`
 */

function greet(name = "John") {
    return `Hello ${name}!`;
    // brukte console log for å se om det funka, så enda jeg tilbake til return
}
greet();

//////FASIT
/* function greet(name = "John") {
    return `Hello ${name}!`;
} */


/* ### Question 2
Create a reusable function that accepts two parameters, 
then returns a dynamic HTML `<div>` element.  
The `<div>` it creates should insert one of the parameters as a class, 
and the other as the inner value. Similar to the below HTML:
```html
<div class="class">value</div> OK
```
 */

const testDiv = document.querySelector (".test") 
//this is right

//testDiv.innerHTML = "";
//element successfully selected

function aReusableOne (parameterOne = "jippi", ParameterTwo = "heisann!") {
    //this is right
    
    const something = `<div class="${parameterOne}"> ${ParameterTwo}</div>`;
    //this one actually needs to "create" the html =
    
    return something;
    //this statement makes it possible to bring things out of the function
}

//this whole function is now "the same" as in the video
////// fortsett fra 3 min,
////// fra 4 min OK
////// problem: i cant link css and html?
// now it works, probably just skrivefeil

const message = aReusableOne("hurra", "hadepåbade");
// now we can use this line to pass in different arguments, 
//taking the place of the default values
// i think I did it? finished?

testDiv.innerHTML = message;

//////FASIT, WHY IS IT SO SHORT HAHAHAHA

/* function divCreator(className, innerValue) {
    return `<div class="${className}">${innerValue}</div>`;
} */






/* 
### Question 3:
Convert the below API call to use a try-catch-finally statement.
 */



async function getFact() {
    //OK

    try {
        //OK
        const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
        //OK
        const results = await response.json();
        //OK
        console.log(results[8].text);
        //OK
    }
    catch (error) {
        //OK
        console.log ("whah whah whah", error);
        //I USED A STRING INSTED OF ERROR
    }
    finally {
        //OK
        console.log ("finally");
        //OK
    }
}
//OK
getFact();
//this was teh one  missing! 

//why isnt my error message showing up in the log ? function shouldnt work?
// if not the results should log?
// not even finally is logging

//// se på fasiten i morgen

////// I THINK I FORGOT TO CALL IT AGAIN:(((( OMG HAHAHAH

/////// FASIT


/* 

async function getFact() {
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
        const results = await response.json();
        console.log(results[8].text);
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
        console.log("This will run whether there is an error not");
    }
}

getFact();

 */







