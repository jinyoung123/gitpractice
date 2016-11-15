function nextSqaure(n){
  var result = 0;
  //함수를 완성하세요
  var num = 1;
  var sqaure = 1;
  while( sqaure <= n ){
  	sqaure = num * num;
  	if( sqaure == n ){
  		return (num+1)*(num+1);
  	} else if(sqaure > n ){
  		return "no";
  	}
  	num++; 
  }
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(576));


