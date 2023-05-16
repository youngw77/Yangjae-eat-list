package com.folder.app.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class CommentDTO {
    private int comment_id;
    private int user_id;
    private int content_id;
    private String context;
    private Date created_at;
    private String updated_at;
    private Boolean comment_edit;
}
