let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = {};
let acceptData = ()=>{
 data["text"]= input.value;
 console.log(data);
 createPost();
};

// To create Post
let createPost = ()=>{
 posts.innerHTML +=`
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i class="fas fa-edit" onClick = "editPost(this)"></i>
    <i class="fas fa-trash-alt" onClick = "deletePost(this)"></i>
    </span>
    </div>
 `;
 input.value="";
};

//To Delete Post
let deletePost= (e)=>{
 e.parentElement.parentElement.remove();
};

//To Edit Post
let editPost = (e)=>{
   input.value =  e.parentElement.previousElementSibling.innerHTML;
   //console.log("Data:", input.value );
   e.parentElement.parentElement.remove();
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = ()=>{
 if(input.value == ""){
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
 }
 else{
    console.log("success");
    msg.innerHTML="";
    acceptData();
 }
};