const url = 'https://api.github.com/users/jacobrhensley/events/public';

fetch(url, {headers: {'Authorization': GITHUBKEY}}).then(response => {
    response.json()
        .then(events => {
            console.log(events);
            for(let i = 0; i < events.length; i++) {
                if (events[i].type === "PushEvent") {
                    let html = '<div>';
                    html += "<h1>" + events[i].created_at + '</h1>';
                    html += "</div>";
                    document.body.innerHTML = html;
                    break;
                }

            }
        });
});
function wait(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, number);
});
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));