package org.iclass.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.iclass.dto.CarDto;

public class CarCO2Dao {
    // Oracle DB 연결 정보
    private final String URL = "jdbc:oracle:thin:@//localhost:1521/xe";
    private final String USER = "c##idev"; // 실제 DB 사용자명으로 변경
    private final String PASSWORD = "1234"; // 실제 비밀번호로 변경
    
  
    // DB 연결
    private Connection getConnection() throws SQLException {
    	 try {
             Class.forName("oracle.jdbc.driver.OracleDriver");
         } catch (ClassNotFoundException e) {
             e.printStackTrace();
         }
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
    
    // 전체 자동차 목록 조회
    public List<CarDto> getAllCars() {
        List<CarDto> carList = new ArrayList<>();
        String sql = "SELECT * FROM tbl_carco2";
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {
            
            while (rs.next()) {
                CarDto car = new CarDto(
                    rs.getString("CAR"),
                    rs.getString("MODEL"),
                    rs.getInt("VOLUME"),
                    rs.getInt("WEIGHT"),
                    rs.getInt("CO2")
                );
                carList.add(car);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return carList;
    }
    
    // 검색 조건에 따른 자동차 목록 조회
    public List<CarDto> searchCars(String carBrand, String model, 
                                 int minVolume, int maxVolume, 
                                 int minWeight, int maxWeight, 
                                 int minCo2, int maxCo2) {
        List<CarDto> carList = new ArrayList<>();
        StringBuilder sql = new StringBuilder("SELECT * FROM tbl_carco2 WHERE 1=1");
        
        // 동적 쿼리 생성
        if (carBrand != null && !carBrand.trim().isEmpty()) {
            sql.append(" AND UPPER(CAR) LIKE UPPER(?)");
        }
        if (model != null && !model.trim().isEmpty()) {
            sql.append(" AND UPPER(MODEL) LIKE UPPER(?)");
        }
        if (minVolume > 0 || maxVolume > 0) {
            if (minVolume > 0) sql.append(" AND VOLUME >= ?");
            if (maxVolume > 0) sql.append(" AND VOLUME <= ?");
        }
        if (minWeight > 0 || maxWeight > 0) {
            if (minWeight > 0) sql.append(" AND WEIGHT >= ?");
            if (maxWeight > 0) sql.append(" AND WEIGHT <= ?");
        }
        if (minCo2 > 0 || maxCo2 > 0) {
            if (minCo2 > 0) sql.append(" AND CO2 >= ?");
            if (maxCo2 > 0) sql.append(" AND CO2 <= ?");
        }
        
        sql.append(" ORDER BY car,model");
        
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql.toString())) {
            
            int paramIndex = 1;
            
            // 파라미터 설정
            if (carBrand != null && !carBrand.trim().isEmpty()) {
                pstmt.setString(paramIndex++, "%" + carBrand + "%");
            }
            if (model != null && !model.trim().isEmpty()) {
                pstmt.setString(paramIndex++, "%" + model + "%");
            }
            if (minVolume > 0) pstmt.setInt(paramIndex++, minVolume);
            if (maxVolume > 0) pstmt.setInt(paramIndex++, maxVolume);
            if (minWeight > 0) pstmt.setInt(paramIndex++, minWeight);
            if (maxWeight > 0) pstmt.setInt(paramIndex++, maxWeight);
            if (minCo2 > 0) pstmt.setInt(paramIndex++, minCo2);
            if (maxCo2 > 0) pstmt.setInt(paramIndex++, maxCo2);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    CarDto car = new CarDto(
                        rs.getString("CAR"),
                        rs.getString("MODEL"),
                        rs.getInt("VOLUME"),
                        rs.getInt("WEIGHT"),
                        rs.getInt("CO2")
                    );
                    carList.add(car);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return carList;
    }
}
