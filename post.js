function postJSON(data) {
    const response = fetch("/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

const uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click",Submit);

function Submit(){
    const postTitle = document.getElementById("postTitle");
    const postContent = document.getElementById("postContent");
    const postDate= GetCurrentTime();
    const data = { title:postTitle.value,content: postContent.value,uploadDate:postDate};
    postJSON(data);
}

function GetCurrentTime(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day=time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minute}`;
}