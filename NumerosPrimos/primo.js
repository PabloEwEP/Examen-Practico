		var num = 1;
		var num1 = 0;
		var primo =0;
		var x = prompt(" ingrese la cantidad de numeros que quiere obtener");
		while(num <=x){
		while( num1 < num ){
			if(num % num1 == 0 && num1 != 1 && num1 != num){
				primo=1;
			}
			num1++;
		}
		if(primo == 0){
			document.write(num1 + "<br/>");
		}else{
			primo = 0;
		}
		num++;
		num1 = 0;
}