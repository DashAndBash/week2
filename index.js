//const { MongoClient } = require("mongodb");
const express = require('express');
const path = require('path');
const app = express();

// 메인서버를 관리하는 소스코드.

// JSON파일을 읽기위해 필요
app.use(express.json());

// CSS와 JS 파일 쓰고싶으면 필수
app.use(express.static(path.join(__dirname)));

// 8080포트에서 사설 서버를 개방.
app.listen(8080,function(){
    console.log('listening on 8080');
});

// 메인 페이지를 띄움
app.get("/",function(req,res){
    res.sendFile(__dirname+"/mainpage.html");
});

// 포스트창 즉, 창을 편집하는 창을 염
app.get("/post",function(req,res){
    res.sendFile(__dirname+"/post.html");
});

// 읽기 창 즉, 뒤에 붙는?id= n번째 게시물을 읽음.
// 다만 
app.get("/read",function(req,res){
    res.sendFile(__dirname+"/read.html");
});

app.get("/getContent/:index",function(req,res){
    const CurrentSitePostContent = AllPost[req.params.index];
    res.send(CurrentSitePostContent);
})


app.post("/upload",function(req,res){
    console.log(req.body);
    AllPost[NextNumber] = req.body;
    NextNumber += 1;
})

let NextNumber = 4;
const AllPost = {
    "1":{title:"오늘부터 1일 1글",content:"진짜 글 열심히 쓴다.",uploadDate:"2024-09-29"},
    "3":{title:"내일부터 새벽운동함",content:"안하면 진짜 뛰어내림.",uploadDate:"2024-10-1"},
    "2":{title:"부경대 맛집 추천",content:"아무거나 다먹으니까 추천좀",uploadDate:"2024-09-30"},
}

app.get("/showPosts",function(req,res){
    res.json(AllPost);
})

