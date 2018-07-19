let expando,relative,click;
      click = "click";
      expando  = document.querySelector(".menubar");
      relative = document.querySelector(".screen_change");
	  
		  expando.addEventListener(click,()=>{
			 relative.classList.toggle("screen_change");			  
			 relative.classList.toggle("navf");			  
});
