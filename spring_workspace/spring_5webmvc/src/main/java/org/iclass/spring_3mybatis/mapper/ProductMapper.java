package org.iclass.spring_3mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.iclass.spring_3mybatis.dto.ProductDto;

@Mapper
public interface ProductMapper {
  ProductDto selectByPk(String pcode);

  List<ProductDto> selectByKeywor(String keyword);
  
  List<ProductDto> selectAll();

  int insert(ProductDto dto);

  int update(ProductDto dot);

  int delete(String pcode);
}
