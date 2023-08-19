let showcase= document.getElementsByClassName('showcase');
// console.log("huaaaaaaaaaaaaa");
Array.from(showcase).forEach(element => {
    console.log("wdgvqh");
    element.addEventListener('click',()=>{
        location.href='pages/productDesc/productDescription.html';
    })
});

let action_btn=document.getElementsByClassName('action-btn')[0];

action_btn.addEventListener('click',(element)=>{
            location.href='pages/sign in/signin.html';
})