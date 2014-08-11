package com.eightobjects.lunches.rs.controller;

import com.eightobjects.lunches.rs.dto.ContactDto;
import com.eightobjects.lunches.rs.dto.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Adam on 2014-07-25.
 */
@Controller
@RequestMapping("contact")
public class ContactController {



    @ResponseBody
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public ContactDto editContact(){
        return null;
    }


    @ResponseBody
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public ContactDto createContact(){
        return null;
    }


    @ResponseBody
    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public ContactDto getContact(@PathVariable String id){
        return null;
    }
}
