function repeat(n, action) {
    for (i = 0; i < n; i++)
        action(i);
}



window.onload = () => {
    let buttons = [];
    repeat(5, i => buttons.push(document.getElementById("button" + (i + 1))));
    let posts = [];
    repeat(5, i => posts.push(document.getElementById("post" + (i + 1))));

    for (let buttonEvent of buttons) {
        buttonEvent.addEventListener("click", () => {
            let keep = buttonEvent.id.slice(-1);

            for (let postEvent of posts) {
                if (postEvent.id.slice(-1) == keep)
                    postEvent.style.display = "flex";
                else
                    postEvent.style.display = "none";
            }

        })
    }
}