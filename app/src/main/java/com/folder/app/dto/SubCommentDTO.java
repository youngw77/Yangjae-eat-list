package com.folder.app.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class SubCommentDTO {
    private int subcomment_id;
    private int comment_id;
    private int user_id;
    private String context;
    private Date created_at;
    private String updated_at;
    private Boolean comment_edit;
}
