const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');



 const addTodo=()=>{
   
 let inputText=inputBox.value.trim();
   //jb input nhi ho aur button click kre error dikha do
 if(inputText<=0){
    alert('sorry pls write something New');
    return false;
 }

 //creating a li and inside value add
 const li=document.createElement('li');
 const p=document.createElement('p');
 //inside p tag write input value
 p.innerHTML=inputText;
// inside list the p tag uses that meana daal diya
 li.appendChild(p);
 todoList.appendChild(li)
 //inputBox is empty 
 inputBox.value="";

 //creating a delete button
 const deleteBtn=document.createElement('button');
 deleteBtn.innerText="Delete";
 li.appendChild(deleteBtn);
 // add class in delete button
 deleteBtn.classList.add('btn', "deleteBtn");

 }

 //for update Button
const  updateTodo=(event)=>{
  //  console.log(event.target.innerHTML)
  //for press Delete Button 
  if(event.target.innerHTML=='Delete'){
     todoList.removeChild(event.target.parentElement)
  }

 }

 addBtn.addEventListener('click',addTodo);
 todoList.addEventListener('click',updateTodo)
