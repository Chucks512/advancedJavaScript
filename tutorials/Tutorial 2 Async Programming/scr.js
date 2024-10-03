userInput = prompt("enter number input");//user input to variable
//userInput = "3";

switch (userInput) {
    case "1":
        // Declare function
        function fetchData(callback) {
            setTimeout(() => {//timeout function
                const data = { name: "John", age: 30 };
                callback(data);//send data to callback function
            }, 3000);//return output after 3 seconds
        }

        // Execute function with a callback
        fetchData(function (data) {//call above function
            alert(JSON.stringify(data));//output its result via json to string
        });

        alert("Data is being fetched...");//alert pending result
        break;//end switch statement
    case "2":
        // Initialize a promise
        const myPromise = new Promise((resolve, reject) => {//instantiate promise
            setTimeout(() => {
                resolve("Hello from the promise!");//resolve with message
            }, 2000);//send message after 2 seconds
        });
        myPromise
            .then((result) => {
                alert(result);//output
            })
            .catch((error) => {
                alert(error);//incase of error alert user
            })
            .finally(() => {
                //code here will be executed regardless of the status
                //of a promise (fulfilled or rejected)
            });
        break;
    case "3":
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');//fetch api data
            const data = await response.json();//store response
            alert(JSON.stringify(data));//alert response
        }

        getData();//call function above
        break;
    default:
        alert("input invalid - end of program")//if all else fails
        break;
}