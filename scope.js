// In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function one () {
    const username = "Khushi"

    function two() {
        const website = "YouTube"

        console.log(username);
    }
    // console.log(website);

    two()
}
one()