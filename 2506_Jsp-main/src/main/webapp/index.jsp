<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>INDEX</title>
</head>
<body>
	<h2>INDEX - 애플리케이션 시작페이지</h2>
	<hr>
	<ul>
		<li><a href="test.jsp">test.jsp 로  요청 보내기</a></li>
		<li><a href="Hello">서블릿으로 요청 보내기</a></li>
		<li><a href="hello">서블릿으로 요청 보내기</a></li>
		<li><a href="request.jsp">request.jsp - request 객체 속성 가져오기</a></li>
		<li><a href="request.jsp?name=kim&hobby=music">request.jsp - request 객체로 파라미터 보내기</a></li>
	<!-- URL 에 추가된 ?name=kim  은 쿼리문자열이고 request 객체의 파라미터로 저장됩니다. -->
		<li><a href="response.jsp">response.jsp - response 객체 메소드</a></li>
		<li><a href="forward.jsp">1)forward.jsp - 요청을 forward 하여 응답 생성</a></li>
		<li><a href="forward.jsp?name=choi&hobby=sport">2)forward.jsp - 파라미터 전달 확인</a></li>
	    <li><a href="forward.jsp">3)forward.jsp - 요청을 URL 'hello' 로 전달  </a></li>
	    <li><a href="Bye">request 애트리뷰트 사용 예시 - 서블릿에서 jsp로 전달하기</a></li>
	</ul>
	<hr>
	<h2>dao 실행해서 화면 만들기</h2>
	<!-- 여기서부터는 URL 링크는 서블릿으로 사용하세요. why? 
	jsp 가 애트리뷰트를 서블릿에서 받아오는 예시를 하고 있기 때문입니다. -->
	<ul>
		<li><a href="Products">Product 목록 조회</a></li>
		<li><a href="Cars">CARs</a></li>
	</ul>

</body>
</html>