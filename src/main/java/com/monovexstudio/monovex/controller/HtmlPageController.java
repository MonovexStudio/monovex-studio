package com.monovexstudio.monovex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlPageController {

    @RequestMapping("/brief")
    public String brief() {
        return "index.html";
    }

}
