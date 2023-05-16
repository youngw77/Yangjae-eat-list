package com.folder.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.folder.app.dto.ContentDTO;
import com.folder.app.dto.FoodListDTO;

@RestController
public class DataController {

    @CrossOrigin(origins = "http://localhost:8800")

    @GetMapping("/")
    public String home() {
        return "Home 화면";
    }

    @GetMapping("/api")
    public String api() {
        return "api 화면 ";
    }

    @PostMapping("/StoreList")
    public FoodListDTO StoreList() {
        return null;
    }

    @PostMapping("/CreateList")
    public void CreateList() {

    }

    @GetMapping("/StoreList/:StoreName")
    public ContentDTO StoreName() {
        return null;
    }

}