package org.iclass.spring_3mybatis;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.iclass.spring_3mybatis.dto.CustomerDto;
import org.iclass.spring_3mybatis.mapper.CustomerMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import lombok.extern.slf4j.Slf4j;

@Transactional
@Slf4j
@SpringBootTest
public class TESTFTEST {
    @Autowired
    private CustomerMapper customerMapper;

    @Test
    void mapper() {

        assertNotNull(customerMapper);
    }

    @Test
    void select() {
        log.info("{}\n", customerMapper.selectAll());
        assertNotEquals(0, customerMapper.selectAll().size());
    }

    @Test
    void insert() {
        int result = customerMapper.insert(new CustomerDto("JJangu", "김장구", "shinnosuke@korea.kr", 23, null));
        assertEquals(1, result);

    }

    @Test
    void update() {
        int result = customerMapper
                .update(CustomerDto.builder().customerId("JJangu").age(24).email("jj@korer.kr").build());
        assertEquals(1, result);
    }

@Test
void remove(){
    int result = customerMapper.delete("JJangu");
    log.info("{}",customerMapper.selectByPk("JJangu"));
    assertEquals(1, result);
}
}
