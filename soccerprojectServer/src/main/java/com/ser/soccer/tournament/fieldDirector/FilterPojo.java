package com.ser.soccer.tournament.fieldDirector;

import java.util.Date;

/**
 * @author Vinita Maloo(vmaloo@asu.edu)
 */
public class FilterPojo {
    private Date date;
    private String matchDate;
    private String applicationGroup;

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

    public String getApplicationGroup() {
        return applicationGroup;
    }

    public void setApplicationGroup(String applicationGroup) {
        this.applicationGroup = applicationGroup;
    }
}
