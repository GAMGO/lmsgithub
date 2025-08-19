package org.iclass.spring_5webmvc.controller;

import org.iclass.spring_5webmvc.TestDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class TestController_2Parameter {
    @GetMapping("/list")
    public void list(String name, @RequestParam(defaultValue = "0") int age) {
        log.info(name);
        log.info("{age}",age);
    }
    @GetMapping("/listA")
    public String listA(String name, int age, String address, String gender){
    log.info("Patameter : {} {} {} {}",name, age, address, gender);
        return "list";
    }
    @GetMapping ("/listB")
    public String listB(TestDto dto){
        log.info("parameter DTO : {}",dto);
    return "list";
    }
      
    @PostMapping("/list")
    public String save (TestDto dto){
        log.info("paramerte save : {}", dto);
        return "redirect:/list";
    }
}
