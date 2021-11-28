package com.ser.soccer.tournament.fieldDirector;

import java.util.Date;

/**
 * @author Vinita Maloo(vmaloo@asu.edu)
 */
public class FilterPojo {
    private Date date;
    private String matchDate;
    private String category;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(String matchDate) {
        this.matchDate = matchDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
