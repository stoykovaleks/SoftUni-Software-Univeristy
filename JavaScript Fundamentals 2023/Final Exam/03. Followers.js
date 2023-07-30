function followers(input) {
    let followers = {};
    let followersOrder = [];

    for (const command of input) {
        if (command === "Log out") {
            break;
        }

        let [action, ...data] = command.split(": ").map((item) => item.replace(/[']|[;]/g, ''));
        let username = data[0];

        switch (action) {
            case "New follower":
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: 0, comments: 0 };
                    followersOrder.push(username);
                }
                break;

            case "Like":
                const count = Number(data[1]);
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: count, comments: 0 };
                    followersOrder.push(username);
                } 
                else {
                    followers[username].likes += count;
                }
                break;

            case "Comment":
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = { likes: 0, comments: 1 };
                    followersOrder.push(username);
                }
                else {
                    followers[username].comments++;
                }
                break;

            case "Blocked":
                if (followers.hasOwnProperty(username)) {
                    delete followers[username];
                    const index = followersOrder.indexOf(username);
                    if (index !== -1) {
                        followersOrder.splice(index, 1);
                    }
                } 
                else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }

    console.log(`${followersOrder.length} followers`);
    
    for (const username of followersOrder) {
        console.log(`${username}: ${followers[username].likes + followers[username].comments}`);
    }
}

followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])

