function mini2(a,b,c){

	var max;
	
	if(isNaN(a) || isNaN(b) || isNaN(c)){
		console.log("a or b must be a number");
		return false;
	}
	
	if(a > b){
		if(a > c){
			max = a;
		}else{
			max = c
		}
	}else if(b>c){
		max = b
	}else{
		max = c;
	}

}