<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>forward 알아보기</title>
</head>
<body>
	<h2>forward 알아보기</h2>
	<hr>
	<p>사용자가 보낸 요청을 다른 URL 또는 JSP 로 전달하여 응답을 만듭니다.
	   처음 요청한 URL 주소가 바뀌지는 않습니다. 왜냐하면 🔥 request 객체가 그대로 전달되고
	   이것은 서버가 forward(전달) 동작시키는 것이기 때문입니다. 
	</p>
	<%
	// 참고 : 서블릿이 받은 request 를 jsp 로 전달하기 위해 사용합니다.()
	//        ㄴ request에 data(애트리뷰트,파라미터)를 저장해서 보낼 수 있습니다.
	// 1) response.jsp 비교
	// RequestDispatcher dispatcher = request.getRequestDispatcher("test.jsp");
	// 2) 파라미터 전달 테스트 -> request.getParameter() 가 있는 request.jsp 로 테스트
	//RequestDispatcher dispatcher = request.getRequestDispatcher("request.jsp");
	// 3) jsp 가 아닌 /hello 로 forward
	RequestDispatcher dispatcher = request.getRequestDispatcher("hello");
	    dispatcher.forward(request, response);
	%>
	
</body>
</html>