package org.iclass.spring_5webmvc.controller;

import java.util.List;

import org.iclass.spring_3mybatis.dto.*;
import org.iclass.spring_3mybatis.mapper.*;
import org.iclass.spring_5webmvc.TestDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@AllArgsConstructor
public class TestController_4Attribute {
    private CustomerMapper cMapper;
    private ProductMapper pMapper;

    @GetMapping("customer/list")
    public String list(Model m) {
        m.addAttribute("page", 1);
        m.addAttribute("dto", TestDto.builder().name("고길동").address("서울").build());
        m.addAttribute("list", List.of("twice", "IVE", "NewJeans", "gg"));
        return "customer/list";
    }

    @GetMapping("/customer/cuslist")
    public String getMethodName(Model cm) {
        List<CustomerDto> cusList = cMapper.selectAll();
        cm.addAttribute("cusList", cusList);
        return "customer/list";
    }

    @GetMapping("/product/list")
    public String plist(Model pm) {
        List<ProductDto> pl = pMapper.selectAll();
        pm.addAttribute("list", pl);
        return "product/list";
    }
}
