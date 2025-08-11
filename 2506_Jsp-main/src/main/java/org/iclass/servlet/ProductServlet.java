package org.iclass.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import org.iclass.dao.TblProductDao;
import org.iclass.dto.ProductDto;

@WebServlet("/Products")
public class ProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ProductServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TblProductDao dao = new TblProductDao();
		List<ProductDto> list =dao.selectAll();
// 방법 1) 출력 스트림으로 텍스트 보내기
//		response.setContentType("text/plain; charset=UTF-8"); 
//		response.getWriter().append("list:").append(list.toString());
// 방법 2) 애트리뷰트에 저장해서 출력할 데이터를 jsp 로 전달하기
		request.setAttribute("list", list);
		request.getRequestDispatcher("product/list.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
