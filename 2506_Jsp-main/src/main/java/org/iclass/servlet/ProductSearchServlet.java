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

@WebServlet("/Search")
public class ProductSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ProductSearchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TblProductDao dao = new TblProductDao();
//		파라미터 이름 문자열은 오타 없이 !!
		// category , keyword 각각 파라미터 이름이 없으면 null  리턴
		String category=request.getParameter("category");
		String keyword = request.getParameter("keyword");
		
		List<ProductDto> list = null; 
		if(category!=null)		
				list = dao.selectByCategory(category);
		if(keyword !=null && keyword.length() !=0)
				list = dao.searchByKeyword(keyword);
		
		request.setAttribute("list", list);
		request.getRequestDispatcher("product/list.jsp").forward(request, response);
	}

}
