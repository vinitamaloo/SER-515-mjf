package com.ser.soccer.tournament.schedular;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Fields")
public class Field {
    private String field;
    private String category;
    private String refereeName;

    public Field(String field, String category, String refereeName) {
        super();
        this.field = field;
        this.category = category;
        this.refereeName = refereeName;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getRefereeName() {
        return refereeName;
    }

    public void setRefereeName(String refereeName) {
        this.refereeName = refereeName;
    }

    public String getLocation() {
        return field;
    }

    public void setLocation(String field) {
        this.field = field;
    }

}
