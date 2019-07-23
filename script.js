window.addEventListener('load',()=>{
	const sounds=document.querySelectorAll(".sounds");
	const keys=document.querySelectorAll(".keys");



keys.forEach((key,index)=>{
	key.addEventListener("click",function() {
			sounds[index].currentTime=0;
		    sounds[index].play();
	})
})

})
