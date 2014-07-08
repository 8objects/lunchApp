package com.eightobjects.lunches.rs.dto;

import java.util.Date;

/**
 * User: maciek
 * Date: 09.06.2014
 * Time: 16:07
 */
public class LunchDto {
    protected String name;
    protected Integer id;
    protected String location;
    protected Date date;

    public String getName() {
        return name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
