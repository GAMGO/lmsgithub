package org.iclass.spring_3mybatis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.iclass.spring_3mybatis.dto.*;

@Mapper
public interface BuyMapper {

    List<BuyDto> selectAll();

    List<BuyDto> selectByUser(String customer_id);

    List<BuyDto> selectByStuff(String pcode);

    List<BuyDto> selectByYears(String buy_date);

    int selectSum(String pcode);

    List<CustomerDto> selectSaleByCustomer(String customer_id);

    Map<String, Integer> selectCountByYear(String year);

    List<Map<String, Object>> selectAllCountByYear();

}
