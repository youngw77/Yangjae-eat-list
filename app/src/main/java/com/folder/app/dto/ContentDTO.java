package com.folder.app.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class ContentDTO {
    private int content_id;
    private int user_id;
    private String title;
    private String context;
    private Date created_at;
    private String updated_at;
}
