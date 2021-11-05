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
    private String refEmail;
    private String category;

    public Fields(String field, String refEmail) {
        super();
        this.field = field;
        this.refEmail = refEmail;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        field = field;
    }

    public String getRefemail() {
        return refEmail;
    }

    public void setRefemail(String refEmail) {
        this.refEmail = refEmail;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String refEmail) {
        this.category = category;
    }
}
