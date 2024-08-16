userInput = prompt("enter number input");
//userInput = "3";

switch (userInput) {
    case "1":
        // Declare function
        function fetchData(callback) {
            setTimeout(() => {
                const data = { name: "John", age: 30 };
                callback(data);
            }, 3000);
        }

        // Execute function with a callback
        fetchData(function (data) {
            alert(JSON.stringify(data));
        });

        alert("Data is being fetched...");
        break;
    case "2":
        // Initialize a promise
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello from the promise!");
            }, 2000);
        });
        myPromise
            .then((result) => {
                alert(result);
            })
            .catch((error) => {
                alert(error);
            })
            .finally(() => {
                //code here will be executed regardless of the status
                //of a promise (fulfilled or rejected)
            });
        break;
    case "3":
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            alert(JSON.stringify(data));
        }

        getData();
        break;
    default:
        alert("input invalid - end of program")
        break;
}