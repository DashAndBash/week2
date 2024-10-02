/*JSON의 형태는 아래와 같습니다.
title:String
content:String
uploadDate:String**/
function addPost(JSON,herfNumber){
    // <div class="post">
    //         <div class="postTitle"> 오늘부터 1일 1글</div>
    //         <div class="postDate">2024-09-29</div>
    // </div>

    const postContainer = document.createElement("a");
    const postTitle = document.createElement("div");
    const postDate = document.createElement("div");
    
    postContainer.href = `/read?id=${herfNumber}`;

    postContainer.classList="post";
    postTitle.classList="postTitle";
    postDate.classList="postDate";
    
    postTitle.textContent = JSON.title;
    postDate.textContent =JSON.uploadDate;
    
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postDate);

    const bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.appendChild(postContainer);
}




fetch('/showPosts')
    .then(response => response.json())
    .then(data => {
    const keys = Object.keys(data);
    keys.forEach(element => {
        const KeyData = data[element];
        addPost(KeyData,element);
    });
    })


