function mini5(x){

	var vowels = ['u','e','o','a','i'];
	var leng = vowels.length;

	for(var i = 0; i < leng; i++){
		if(x === vowels[i]){
			return true;
		}else{
			return false;
		}
	}
}