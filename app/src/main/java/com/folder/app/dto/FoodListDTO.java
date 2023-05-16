package com.folder.app.dto;

import java.lang.reflect.Array;

import lombok.Data;

@Data
public class FoodListDTO {
    private int id;
    private String writer;
    private String name;
    private int evaluation;
    private Array coordinate;
}
