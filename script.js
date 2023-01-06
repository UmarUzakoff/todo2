let span = document.querySelector("span");
let body = document.querySelector("body");
let posts = document.getElementById("posts");
    let modeBtn = document.querySelector(".mode-btn");
    let inputt = document.querySelector("input");
    let formm = document.querySelector("form");
    modeBtn.addEventListener('click', function () {
        body.classList.toggle('body-dark');
        modeBtn.classList.toggle('moon-btn');
        inputt.classList.toggle('white-input');
        formm.classList.toggle('form-white');
        span.classList.toggle('dark-span');
        posts.classList.toggle('dark-post')
    });
    
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be empty";
      console.log("failure");
    } else {
      console.log("success");
      msg.innerHTML = "";

      acceptData();
    }
  };

  let data = {};

  let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
  };

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        <i onClick="completedPost(this)" class="fas fa-check-circle"></i>
        <i onClick="undoPost(this)" class="fas fa-undo"></i>
      </span>
    </div>
    <hr>
    `;
    input.value = "";
  };

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    // document.getElementById("posts").style.textDecoration = "line-through";
  };

//   task_completed_button.addEventListener('click', ()=>{
            
//     task_input.style.textDecoration="line-through";
//     task_input.setAttribute("readonly", "readonly");
   
// })

    let completedPost = (e) => {
        e.parentElement.parentElement.style.textDecoration = "line-through";

        // data.style.textDecoration = "line-through";
        e.parentElement.parentElement.setAttribute("readonly", "readonly");
    }

    let undoPost = (e) => {
        e.parentElement.parentElement.style.textDecoration = "none";

        // data.style.textDecoration = "line-through";
        e.parentElement.parentElement.setAttribute("readonly", "readonly");
    }