async function getFact() {
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
        const results = await response.json();
        console.log(results[8].text);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("This will run whether there is an error not");
    }
}

getFact();
