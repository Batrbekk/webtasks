function ClickMe(){
	var sum1 = document.getElementById('sum1').value;
	var sum2 = document.getElementById('sum2').value;
	var sum3 = document.getElementById('sum3').value;
	var sum4 = document.getElementById('sum4').value;
	var sum5 = document.getElementById('sum5').value;
	var sum6 = document.getElementById('sum6').value;
	var sum7 = document.getElementById('sum7').value;
	var sum8 = document.getElementById('sum8').value;
	var sum9 = document.getElementById('sum9').value;
	var answer = (sum1*sum5*sum9) + (sum2*sum6*sum7) + (sum3*sum4*sum8) - (sum3*sum5*sum7) - (sum1*sum6*sum8) - (sum2*sum4*sum9);
	document.getElementById("answer").innerHTML = answer;
}