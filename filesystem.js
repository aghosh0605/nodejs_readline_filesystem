const { table } = require("console");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function adddata(){
    rl.question("What is your name? " , (name) =>{
        rl.question("What is your age? " ,(age) =>{
            rl.question("What is your address? " , (address) =>{
                rl.close(); 
                var jsObject = {
                    Name : name,
                    Age : age,
                    address : address,
                } 
                
               // let jsonstring = JSON.stringify(jsObject);
   //             console.log(jsonstring);
                rawData = fs.readFileSync("data.json");
                jsData = JSON.parse(rawData);
                jsData.table.push(jsObject);
                json = JSON.stringify(jsData);
                fs.writeFileSync("data.json", json);
                console.log("Your Added Data!");
                console.table(jsObject); 
//                homepage();
            });
    
        });
        
    });
}

function viewdata() {
    dataBuffer = fs.readFileSync("data.json");
    realData = JSON.parse(dataBuffer);
    console.table(realData.table);
    console.log("All database has been shown!");
    rl.close();
}

function deletedata(){
    dataBuffer = fs.readFileSync("data.json");
    realData = JSON.parse(dataBuffer);
    //console.log("Enter Index to delete: ");
    rl.question("Enter Index to delete: ", (index) =>{
        console.table(realData.table[index]);
        realData.table.splice(index,1);
        //console.log(realData);
        json = JSON.stringify(realData);
        fs.writeFileSync("data.json", json);
        console.log("Data Successfully Deleted!");
        rl.close();
    });
    
}

console.log("Choose one of the options :)");
console.log("1. Add new Data");
console.log("2. View all Data");
console.log("3. Delete a Data")
rl.question("Enter your option: ", (option) =>{   
    switch(option){
        case "1":
            adddata()
            break;
        case "2":
            viewdata() 
            break;
        case "3":
            deletedata() 
            break;    
        default:
            console.log("You entered some incorrect options :( TRY AGAIN!");
    } 
    rl.close();   
    });
       