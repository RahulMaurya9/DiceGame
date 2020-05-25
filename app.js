var score, roundscore, activeplayer, dice;
init();
// var lastdice;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        document.getElementById('dice-0').style = 'block';
        document.getElementById('dice-1').style = 'block';
        document.querySelector('#dice-0').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-1').src = 'dice-' + dice2 + '.png';
        // if (dice === 6 && lastdice === 6) {
        //     score[activeplayer] = 0;
        //     document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
        //     NextPlayer();
        // } else 
        if (dice1 !== 1 && dice2 !== 1) {
            roundscore += dice1+dice2;
            document.querySelector('#current-' + activeplayer).textContent = roundscore;
        } else {
            NextPlayer();
        }
        // lastdice = dice;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGamePlaying) {
        document.getElementById('dice-0').style = 'none';
        document.getElementById('dice-1').style = 'none';
        score[activeplayer] += roundscore;
        document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
        var input = document.querySelector('.final-score').value;
        var lastvalue;
        console.log(input)
        if (input) {
            lastvalue = input;
        } else {
            lastvalue = 100;
        }
        if (score[activeplayer] >= lastvalue) {
            document.querySelector('#name-' + activeplayer).textContent = 'Winner';
            // document.getElementById('dice-0').style = 'none';
            // document.getElementById('dice-1').style = 'none';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            isGamePlaying = false;
        } else {
            NextPlayer();
        }

    }

});
// TODO : THIS PIECE OF CODE FOR SETTING NEXT PLAYER 
function NextPlayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-0').style = 'none';
    document.getElementById('dice-1').style = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    score = [0, 0];
    roundscore = 0;
    activeplayer = 0;
    isGamePlaying = true;
    document.getElementById('dice-0').style = 'none';
    document.getElementById('dice-1').style = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Rahul';
    document.getElementById('name-1').textContent = 'Shivam';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('acitve');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}
