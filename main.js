function calcular(){
	var n=document.getElementById("numero").value;
	var diff;
	var salida =document.getElementById("salida");
	if( n>21){
		diff=n-21;
		diff=diff*2;
		salida.innerHTML=diff;
	}
	else{
		diff=21-n;
		salida.innerHTML=diff;
	}
}