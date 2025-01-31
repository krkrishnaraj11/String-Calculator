function add(numbers) {
    if (!numbers) return 0; // Return 0 for an empty string

    let delimiter = /,|\n/; // Default delimiters

    // Check if custom delimiter is defined
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterPart = parts[0].slice(2);
        
        // Handle multiple or multi-character delimiters
        if (delimiterPart.startsWith("[")) {
            delimiter = new RegExp(delimiterPart.match(/\[(.*?)\]/g).map(d => d.slice(1, -1)).join("|"));
        } else {
            delimiter = new RegExp(delimiterPart);
        }
        numbers = parts[1];
    }
    
    const numArray = numbers.split(delimiter).map(Number);
    
    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    
    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;