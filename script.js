//your code here
const input=document.getElementById("newTodoInput")
const button=document.getElementById("addTodoBtn")
const ol=document.getElementById("todoList")
button.addEventListener("click",()=>{
	const input1=input.value.trim();
if(input1===""){
	alert("please enter a todo item")
	return;
}
	let li=document.createElement("li")
	li.innerText=input1;
	if(input1){
		ol.appendChild(li)
		
	}
	input.value=""
	return input1
})
