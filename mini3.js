function mini3(x){

	var leng = x.length;
	var max = x[0];
	var validate = true;

	for(var i = 0; i<leng; i++){
		if(isNaN(x[i])){
			console.log("input must be a number");
			validate = false;
			break;
		}
	}

	if(validate == true){
		for(var i = 0; i < leng; i++){
			if(x[i] > max){
				max = x[i];
			}
		}
	}
}