package org.iclass.spring_3mybatis.dto;
import java.sql.Date;

import lombok.Builder;
// import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class CustomerDto {
    private final String customerId;
    private final String name;
    private final String email;
    private final Integer age;
    private final Date regDate;
}
