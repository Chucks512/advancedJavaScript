txtBox = document.getElementById("pswd");
btn = document.getElementById("btn");
const passwords =
    [
        "Administration",
        "Appearance",
        "Atmosphere",
        "Combination",
        "Championship",
        "Conversation",
        "Distribution",
        "Establishment",
        "Independence",
        "Introduction",
        "Manufacturer",
        "Organization",
        "Performance",
        "Presentation",
        "Recommendation",
        "Responsibility",
        "Significance",
        "Supermarket",
        "Technology",
        "Transportation"
    ];

function checkPassword() {
    let myPromise = new Promise(function (myResolve, myReject) {
        // "Producing Code" (May take some time)    
        if (passwords.includes(txtBox.value)) {
            myResolve(); // when successful        
        } else {
            myReject();  // when error        
        }
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function () { alert("YAY"); /* code if successful */ },
        function () { alert("NAH"); /* code if some error */ }
    );
}