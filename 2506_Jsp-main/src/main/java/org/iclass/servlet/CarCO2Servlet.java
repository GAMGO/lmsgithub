package org.iclass.servlet;

import java.io.IOException;
import java.util.List;

import org.iclass.dao.CarCO2Dao;
import org.iclass.dto.CarDto;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/Cars")
@SuppressWarnings("serial")
public class CarCO2Servlet extends HttpServlet {
    
    private CarCO2Dao carDAO;
    
    @Override
    public void init() throws ServletException {
        carDAO = new CarCO2Dao();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // 기본적으로 전체 자동차 목록 조회
        List<CarDto> carList = carDAO.getAllCars();
        request.setAttribute("carList", carList);
        request.getRequestDispatcher("car/co2List.jsp").forward(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // 한글 인코딩 설정
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        
        // 검색 파라미터 받기
        String carBrand = request.getParameter("carBrand");
        String model = request.getParameter("model");
        
        // 배기량(Volume) 파라미터
        String minVolumeStr = request.getParameter("minVolume");
        String maxVolumeStr = request.getParameter("maxVolume");
        int minVolume = (minVolumeStr != null && !minVolumeStr.trim().isEmpty()) 
                       ? Integer.parseInt(minVolumeStr) : 0;
        int maxVolume = (maxVolumeStr != null && !maxVolumeStr.trim().isEmpty()) 
                       ? Integer.parseInt(maxVolumeStr) : 0;
        
        // 무게(Weight) 파라미터
        String minWeightStr = request.getParameter("minWeight");
        String maxWeightStr = request.getParameter("maxWeight");
        int minWeight = (minWeightStr != null && !minWeightStr.trim().isEmpty()) 
                       ? Integer.parseInt(minWeightStr) : 0;
        int maxWeight = (maxWeightStr != null && !maxWeightStr.trim().isEmpty()) 
                       ? Integer.parseInt(maxWeightStr) : 0;
        
        // CO2 배출량 파라미터
        String minCo2Str = request.getParameter("minCo2");
        String maxCo2Str = request.getParameter("maxCo2");
        int minCo2 = (minCo2Str != null && !minCo2Str.trim().isEmpty()) 
                    ? Integer.parseInt(minCo2Str) : 0;
        int maxCo2 = (maxCo2Str != null && !maxCo2Str.trim().isEmpty()) 
                    ? Integer.parseInt(maxCo2Str) : 0;
        
        // 검색 실행
        List<CarDto> carList = carDAO.searchCars(carBrand, model, minVolume, maxVolume, 
                                               minWeight, maxWeight, minCo2, maxCo2);
        
        // 검색 결과를 request에 저장
        request.setAttribute("carList", carList);
        //request.setAttribute("searchParams", request.getParameterMap());
        
        // JSP로 포워딩
        request.getRequestDispatcher("car/co2List.jsp").forward(request, response);
    }
}