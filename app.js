document.addEventListener("DOMContentLoaded", function(){
    const friends = ["Justin", "Jordan", "Kasandra", "Rachel", "Madi"];
    let button = document.querySelector("button");
    
    button.addEventListener("click", function(){
        for (i = 0; i < friends.length; i++) {
            let friend = document.createElement("div");
            friend.className = "friend";
            let headers = document.createElement("h3");
            let headerText = document.createTextNode(friends[i]);
            headers.appendChild(headerText);
            document.body.appendChild(friend);
            friend.appendChild(headers);

            for (num = 99; num >= 1; num--) {
        
                if (num > 2) {
                    let p = document.createElement("p");
                    let pText = document.createTextNode(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out; " + (num - 1) + " lines of code in the file.");
                    p.appendChild(pText);
                    friend.appendChild(p);
                }
                else if (num == 2) {
                    let p = document.createElement("p");
                    let pText = document.createTextNode(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out; " + (num - 1) + " line of code in the file.");
                    p.appendChild(pText);
                    friend.appendChild(p);
                }
                else {
                    let p = document.createElement("p");
                    let pText = document.createTextNode(num + " line of code in the file, " + num + " line of code; " + friends[i] + " strikes it out, clears it all out; no more lines of code in the file.");
                    p.appendChild(pText);
                    friend.appendChild(p);
                }
            }
        }
    
    })


})

