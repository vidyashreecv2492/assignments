  
function count_vowels(str) {
    var list = 'aeiouAEIOU';
    var count = 0;
    var char_count = 0
    
    var matching = str.match(/[aeiou]/g);
    if(matching)
    {
        console.log(`The string contains ${matching.length} vowels`)
    }
    else{
        return -1;
    }

    for (var i = 0; i < str.length; i++) {
        if (str.indexOf("B") !== -1) {
            char_count++;
        }
    }
    console.log("Count of the charachters in this string is: " + char_count)
}

count_vowels("Betty brought some butter");