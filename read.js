function readCurrentPosition(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id;
}
//{title:"제목",content:"내용",uploadDate:"날짜"}
function DisplayPosts(data){
    const postingTitle = document.getElementById("postingTitle");
    const postingContent = document.getElementById("postingContent");
    const postingDate = document.getElementById("postingDate");

    postingTitle.textContent = data.title;
    postingContent.textContent = data.content;
    postingDate.textContent = data.uploadDate;
}
function FetchForContent(siteId){
    fetch('/getContent/'+siteId)
        .then(response => response.json())
        .then(data => DisplayPosts(data));
}



const CurrentSiteId = readCurrentPosition();
FetchForContent(CurrentSiteId);

