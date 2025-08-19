package org.iclass.spring_5webmvc.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class TestController_3FileUpload {
    @PostMapping("/upload")
    public String upload(String title, MultipartFile uploadFile) {
        log.info("파일명 : {}", uploadFile.getOriginalFilename());
        log.info("파일크기 : {} bytes", uploadFile.getSize());
        try {
            if (uploadFile.getSize() != 0) {
                File path = new File("C:\\Users\\C104\\Downloads" + uploadFile.getOriginalFilename());
                uploadFile.transferTo(path);
            }
        } catch (IOException e) {
            log.info("Upload FAILED : cause, {}", e.getMessage());
        }
        return "redirect:/";
    }

}
