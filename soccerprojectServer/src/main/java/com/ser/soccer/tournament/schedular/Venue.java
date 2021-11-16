/**
 * COPYRIGHT (C) 2015 archit.imsec10@gmail.com. All Rights Reserved.
 * ******************************************************************
 * @author archit.kapoor
 *
 */

package com.ser.soccer.tournament.schedular;

class Venue {

    private String venueName;
    private boolean occupied;

    public Venue(String venueName) {
        super();
        this.venueName = venueName;
        this.occupied = false;
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String name) {
        this.venueName = name;
    }

    public boolean isOccupied() {
        return occupied;
    }

    public void setOccupied(boolean occupied) {
        this.occupied = occupied;
    }
}