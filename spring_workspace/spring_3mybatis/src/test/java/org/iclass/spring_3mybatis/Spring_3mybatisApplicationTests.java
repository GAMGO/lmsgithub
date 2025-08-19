package org.iclass.spring_3mybatis;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.iclass.spring_3mybatis.mapper.BuyMapper;
import org.iclass.spring_3mybatis.mapper.ProductMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@SpringBootTest
class Spring_3mybatisApplicationTests {
@Autowired
private BuyMapper buyMapper;
@Autowired
private ProductMapper productMapper;
@Test
	void contextLoads() {
		assertNotNull(buyMapper);
		assertNotNull(productMapper);
	}
@Test
	void select(){
		log.info("{}",buyMapper.selectAll());
	assertNotEquals(0,buyMapper.selectAll().size());
	}
}