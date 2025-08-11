<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>request 알아보기</title>
</head>
<body>
		<h2>request 알아보기</h2>
		<hr>
		<p>jsp 에서 HttpServletRequest 타입 request 요청 객체는 선언하지 않고 바로
		   사용할 수 있도록 내장(embeded) 객체로 만들어졌습니다. request 객체는 사용자가
		   보내는 요청과 관련된 정보(속성)를 저장하고 있습니다.</p>
		<ul>
			<li>요청 URL : <%= request.getRequestURL() %> </li>
			<li>요청 URI : <%= request.getRequestURI() %> </li>
			<li>컨텍스트(context) : <%= request.getContextPath() %> </li>
		</ul>
		<hr>   
		<ul>
			<li>클라이언트 IP : <%= request.getRemoteAddr() %></li>
			<li>클라이언트 호스트이름 : <%= request.getRemoteHost() %></li>
			<li>클라이언트 포트 : <%= request.getRemotePort() %></li>
		</ul>
		<hr><!-- 서버 입장에서는 클라이언트가 remote, 서버 자신은 local -->   
		<ul>
			<li>서버 IP : <%= request.getLocalAddr() %></li>
			<li>서버 Name : <%= request.getLocalName() %></li>
			<li>서버 포트 : <%= request.getLocalPort() %></li>
		</ul>
		<h4>파라미터 가져오기-Index 의 링크 클릭!!</h4>
		<p>
			name 파라미터 값: <%= request.getParameter("name") %>,
			hobby 파라미터 값: <%= request.getParameter("hobby") %>
		</p>
		<!-- 
Eclipse에서 IPv4 설정
-메뉴에서 Run > Run Configurations 선택
-왼쪽에서 Apache Tomcat 에서 Tomcat 항목 선택
-해당 실행 설정에서 Arguments 탭 클릭
-VM arguments에 다음 추가:  -Djava.net.preferIPv4Stack=true
		 -->
</body>
</html>