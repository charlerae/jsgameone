


/* Player Chooses School  */
function luck() {
  return (Math.floor(Math.random() * 50));
}

function study() {
  return (Math.floor(Math.random() * 50));
}

function school() {
    let outcome = luck() + study(); 
    if (outcome <40) {
        alert ('Flunk Out');
    } else if (outcome <70) {
        alert ('Graduate');
    } else {
        alert ('Switch Schools');
    }
}

let choiceTwo = document.getElementById('school');

choiceTwo.addEventListener("click", school);

/* Player Chooses Market  */
function lucky() {
    return (Math.floor(Math.random() * 50));
}

function savvy() {
    return (Math.floor(Math.random() * 50));
}

function market() {
    let outcome = lucky() + savvy(); 
    if (outcome <40) {
        alert ('You were Robbed!! Sorry you did not survive.');
    } else if (outcome <70) {
        alert ('Good Decision! You sold out and now you are RICH!! As you can now pay your taxes you  have become a citizen of Vahnahlah!');
    } else {
        alert ('You sold a few items but you should aquire better wares and try again.');
    }
}

let choiceOne = document.getElementById('market');

choiceOne.addEventListener("click", market);