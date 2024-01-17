async function attachEvents() {
    const baseUri = "http://localhost:3030/jsonstore/blog"
    const postEndpoint = "posts/";
    const comments = "comments/";


    document.getElementById("btnLoadPosts").addEventListener("click", createOptions);
    document.getElementById("btnViewPost").addEventListener("click", loadPostData);
    const selectBtn = document.getElementById("posts");
    const titleRef = document.getElementById("post-title");
    const titleDescribe = document.getElementById("post-body");
    const commentsRef = document.getElementById("post-comments");

    async function loadPostData(e) {
        const postId = selectBtn.value;
        const post = await getPostById(postId);
        titleRef.textContent = post.title;
        titleDescribe.textContent = post.body;
        loadComments();
    }

    async function loadComments() {
        commentsRef.innerHTML = "";
        const comments = await getCommentsById();
        const currentComments = Object.values(comments).filter(x => x.postId === postId);
        currentComments.forEach(comment => {
            let li = generateAndAppendDomElement("li", comment.text);
            commentsRef.appendChild(li);

        })

    }

    async function getCommentsById() {
        const response = await fetch(baseUri + comments);
        const data = await response.json();

        return data;
    }

    async function getPostById(id) {
        const response = await fetch(baseUri + postEndpoint + id);
        const data = await response.json();

        return data;
    }

    async function createOptions(e) {
        selectBtn.innerHTML = "";
        const posts = await getAllPost()

        Object.entries(posts).forEach(el => {
            const optionEl = generateAndAppendDomElement("option", el[1].title, el[1].id)
            selectBtn.appendChild(optionEl);
        })

    }

    async function getAllPost() {
        const response = await fetch(baseUri + postEndpoint);
        const data = await response.json();
        return data;
    }
    function generateAndAppendDomElement(type, content, id, classes, style) {
        const element = document.createElement(type);
        if (type === "input" && type === "textarea") {
            element.value = content;
        }
        else if (type === "option") {
            element.value = id;
            element.textContent = content;
        }
        else{
            element.textContent = content;
        }
        return element;
    }
}

attachEvents();