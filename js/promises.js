const url = 'https://api.github.com/users';

fetch(url, {headers: {'Authorization': GITHUBKEY}}).then(response => {
    response.json()
        .then(users => {
            // handle the data and do something about it
            let html = '<ul>';
            for(let user of users){
                html += `<li>${user.login}</li>`
            }
            html += '</ul>';
            document.body.innerHTML = html;
        });
});

function fetchGithubUser(username){
    fetch(`${url}/${username}`, {headers: {'Authorization': GITHUBKEY}}).then(response => {
        response.json().then(console.log(response));
    });
}

fetchGithubUser('jacobrhensley');
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}});

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));