package org.iclass.spring_5webmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class TestController_1View {
    @GetMapping("/login")
    public void login() {

    }
    @GetMapping("/join")
    public void join(){

    }

}
