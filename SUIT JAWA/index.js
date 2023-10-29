const playerButtons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

const options = ['batu', 'gunting', 'kertas'];

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = options[Math.floor(Math.random() * 3)];

        const winner = determineWinner(playerChoice, computerChoice);
        showResult(winner, computerChoice);

        setTimeout(() => {
            result.innerText = '';
        }, 2000);
    });
});

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Seri';
    } else if (
        (playerChoice === 'batu' && computerChoice === 'gunting') ||
        (playerChoice === 'gunting' && computerChoice === 'kertas') ||
        (playerChoice === 'kertas' && computerChoice === 'batu')
    ) {
        return 'Pemain Menang!';
    } else {
        return 'Komputer Menang!';
    }
}

function showResult(winner, computerChoice) {
    result.innerText = `Komputer memilih ${computerChoice}. ${winner}`;
}
