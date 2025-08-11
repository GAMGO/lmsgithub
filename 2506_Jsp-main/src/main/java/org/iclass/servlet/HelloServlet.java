package org.iclass.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// 서블릿 - HTTP 요청을 처리하고 응답(html 페이지 또는 json)을 리턴하는 자바 클래스
@WebServlet({ "/Hello", "/hello" })
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public HelloServlet() {
        super();
    }

    // GET 요청을 처리하는 메소드 (인자는 요청과 응답)
    //   ㄴ  응답 : 1) 문자열 출력     2) jsp -> html 페이지   3) REST API - json   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// 1. 일반 문자열
//		response.getWriter().append("Served at: ").append(request.getContextPath());

// 2. html 문서		
// response.getWriter() 출력스트림(WAS에서 사용자브라우저) 문자열을 html 구조로 보낼 수도 있습니다.
		response.setContentType("text/html; charset=UTF-8"); 
		// 응답은 html 문서이고 UTF-8 인코딩이라는 것을 설정
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>서블릿 출력</title></head>");
        out.println("<body>");
        out.println("<h1>안녕하세요, 서블릿에서 직접 출력한 HTML입니다!</h1>");
        out.println("<ul>");
        out.println("<li>sana</li>");
        out.println("<li>momo</li>");
        out.println("<li>nayeon</li>");
        out.println("<li>nana</li>");
        out.println("</ul>");
        out.println("</body>");
        out.println("</html>");
	}

	// POST 요청을 처리하는 메소드 (인자는 요청과 응답)
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
	}

}
