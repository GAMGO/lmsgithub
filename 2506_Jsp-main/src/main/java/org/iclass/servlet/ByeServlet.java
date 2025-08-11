package org.iclass.servlet;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/Bye")
public class ByeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ByeServlet() {
        super();
    }

    // jsp 페이지로 데이터와 함께 요청을 전달. -> jsp 에서 데이터를 화면에 출력 -> html 문서 응답
    //   ㄴ  동적인 데이터로 html 화면을 생성하기위해 조회된 데이터를 jsp 전달
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// request 객체에 애트리뷰트 데이터를 저장하여 전달(Object 타입)
		request.setAttribute("name", "PARK");
		request.setAttribute("age", 23);
		request.setAttribute("list", List.of(99,88,85,100,77));
		// 애트리뷰트 데이터를 전달 받는 url 은 buyServlet.jsp
		RequestDispatcher dispatcher = request.getRequestDispatcher("attribute.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
