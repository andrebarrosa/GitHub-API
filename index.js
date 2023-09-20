function BuscaRepo() {
    const usernameInput = document.getElementById("nome").value;
}

function getGit() {

    const usernameInput = document.getElementById("username").value;

    fetch(`https://api.github.com/users/${usernameInput}/repos`)
        .then(res => res.json())
        .then(dados => {

            dados.map(cada => {
                main.innerHTML +=
                    `
                    <div class="card mt-3"  style="width: 100%;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-center" style="color:#008E8E;">${cada.name}</li>
                    <li class="list-group-item d-flex justify-content-center" style="color:#008E8E;">${cada.created_at}</li>
                    </ul>
                </div>
                
                `
            })
        })

}

getGit();