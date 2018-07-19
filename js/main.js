let expando,relative,click;
      click = "click";
      expando  = document.querySelector(".menubar");
      relative = document.querySelector(".screen_change");
      body = document.querySelector(`body`);
	  
		  expando.addEventListener(click,()=>{
			 relative.classList.toggle("screen_change");			  
});
/* 
  expando.addEventListener("blur",(e)=>{
	
	  body.addEventListener("mouseover",()=>{
		  if(25==25){relative.classList.add("screen_change");}
		  relative.addEventListener(click,()=>{
		  relative.classList.remove("screen_change");		  
	  });
	  
	  });
	
	//else{
	//  relative.classList.add("screen_change");	
	  //}		  
});
 */