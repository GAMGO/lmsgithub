<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fn" uri="jakarta.tags.functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car CO2</title>
	<link rel="stylesheet" href="./assets/css/carList.css"/>
</head>
<body>
    <div class="container">
        <h1>Car CO2 검색</h1>
        
        <!-- 검색 폼 -->
        <div class="search-form">
            <form method="post" action="Cars">
                <div class="search-row">
                    <div class="search-group">
                        <label for="searchCar">자동차 브랜드</label>
                        <input type="text" id="searchCar" name="carBrand"
                               value="${param.carBrand}" placeholder="Toyota, BMW...">
                    </div>
                    <div class="search-group">
                        <label for="searchModel">모델명</label>
                        <input type="text" id="searchModel" name="model" 
                               value="${param.model}" placeholder="Aygo, Cooper...">
                    </div>
                </div>
                
                <div class="search-row">
                    <div class="search-group">
                        <label>배기량 (VOLUME)</label>
                        <div class="range-group">
                            <input type="number" name="minVolume" 
                                   value="${param.minVolume}" placeholder="최소" min="0">
                            <span>~</span>
                            <input type="number" name="maxVolume" 
                                   value="${param.maxVolume}" placeholder="최대" min="0">
                        </div>
                    </div>
                    
                    <div class="search-group">
                        <label>무게 (WEIGHT)</label>
                        <div class="range-group">
                            <input type="number" name="minWeight" 
                                   value="${param.minWeight}" placeholder="최소" min="0">
                            <span>~</span>
                            <input type="number" name="maxWeight" 
                                   value="${param.maxWeight}" placeholder="최대" min="0">
                        </div>
                    </div>
                    
                    <div class="search-group">
                        <label>CO2 배출량</label>
                        <div class="range-group">
                            <input type="number" name="minCo2" 
                                   value="${param.minCo2}" placeholder="최소" min="0">
                            <span>~</span>
                            <input type="number" name="maxCo2" 
                                   value="${param.maxCo2}" placeholder="최대" min="0">
                        </div>
                    </div>
                </div>
                
                <div class="search-buttons">
                    <button type="submit" class="btn btn-primary">검색</button>
                    <a class="btn btn-secondary" onclick="resetForm()">초기화</a>
                    <button type="button" class="btn btn-secondary">새 차량 추가</button>
             
                </div>
            </form>
        </div>
        
        <!-- 검색 결과 정보 -->
        <div class="result-container">
        전체 자동차 목록: ${fn:length(carList)}건
    	</div>
        
        <!-- 자동차 목록 테이블 -->
        <c:choose>
            <c:when test="${not empty carList}">
                <table>
                    <thead>
                        <tr>
                            <th>IDX</th>
                            <th>CAR</th>
                            <th>MODEL</th>
                            <th>VOLUME</th>
                            <th>WEIGHT</th>
                            <th>CO2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="car" items="${carList}" varStatus="status">
                            <tr>
                                <%-- <td>${car.idx}</td> --%>
                                <td>${status.count}</td>
                                <td>${car.car}</td>
                                <td>${car.model}</td>
                                <td>${car.volume}</td>
                                <td>${car.weight}</td>
                                <td>${car.co2}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </c:when>
            <c:otherwise>
               <div class="no-data">
                    검색 조건에 맞는 자동차가 없습니다.
                </div>
            </c:otherwise>
        </c:choose>
    </div>
    <script>
        // 폼 초기화 기능
     	function resetForm() {
            // 모든 input 필드 초기화
            document.querySelectorAll('input').forEach(function(input) {
                input.value = '';
            });
            // 전체 목록 다시 로드
            location.href = 'Cars';
        }
        
        // 숫자 입력 필드 유효성 검사
        document.querySelectorAll('input[type="number"]').forEach(function(input) {
            input.addEventListener('input', function() {
                if (this.value < 0) {
                    this.value = '';
                }
            });
        });
        
        // 엔터 키로 검색 실행
        document.querySelector('form').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.submit();
            }
        });
    </script>
</body>
</html>