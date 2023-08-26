fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => getPost(data))



function getPost(data){
    const postField = document.getElementById('post-field')
    for (const item of data) {
        console.log(item);
        const div = document.createElement('div')
        div.innerHTML = `
        <h5>Post: ${item.id}</h5>
        <h4>Title: ${item.title}</h4>
        <p>Description: ${item.body}</p>
        <h5>User ID: ${item.userId}</h5>
        <hr>
        `
        postField.appendChild(div)
    }
}