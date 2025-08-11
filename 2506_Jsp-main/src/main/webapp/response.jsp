<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>response 알아보기</title>
</head>
<body>
	<h2>response 알아보기</h2>
	<hr>
	<p>response 는 응답을 저장하는 객체. jsp에서 바로 사용할 수 있는 내장객체입니다.
	   response 는 redirect 메소드를 사용하여 다른 url 로 새로운 요청을
	   서버에 전달합니다.
	 </p>
	 <%  // -> 이 기호는 자바 코드가 작성되고 실행되는 스크립트릿 이라고 부릅니다.
	     // -> 자바 코드로 값을 출력할 때에는 = 기호를 추가합니다.
	 
	     response.sendRedirect("test.jsp");  
	     //  ㄴ 실행 하면 http://localhost:8080/jspProject/test.jsp 여기로 바로 이동
	     //  ㄴ 서버가 클라이언트에게 새로이 test.jsp 로 요청을 보내라고 응답. 
	     //  ㄴ 새로운 request 객체가 생깁니다.  (참고로 위의 html 요소 출력 ❌)
	 %>
</body>
</html>