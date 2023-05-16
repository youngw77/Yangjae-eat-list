package com.folder.app.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class UserDTO {
    private int user_id;
    private String name;
    private Date created_at;
}