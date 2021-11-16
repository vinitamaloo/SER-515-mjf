package com.ser.soccer.tournament.Fields;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Jayasai Kalyan Reddy
 *
 */

@Document(collection= "Fields")
public class Fields {

    private String field;
    private String refereename;
    private String category;

    public Fields(String field, String refereename,String category) {
        super();
        this.field = field;
        this.refereename = refereename;
        this.category=category;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        field = field;
    }

    public String getRefName() {
        return refereename;
    }

    public void setRefName(String refereename) {
        this.refereename = refereename;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
