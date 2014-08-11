package com.eightobjects.lunches.rs.controller;

import com.eightobjects.lunches.rs.dto.ContactDto;
import com.eightobjects.lunches.rs.dto.LunchDto;
import com.eightobjects.lunches.rs.dto.LunchSearchDTO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * User: maciek
 * Date: 09.06.2014
 * Time: 16:06
 */

@Controller
@RequestMapping("/lunch")
public class LunchController {

    @ResponseBody
    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto getLunch(@PathVariable Long id) {
        LunchDto lunch = new LunchDto();
        return lunch;
    }

    @ResponseBody
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto createLunch() {
        LunchDto lunch = new LunchDto();
        return lunch;
    }

    @ResponseBody
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto updateLunch(@RequestBody LunchDto lunch) {

        return lunch;
    }

    @ResponseBody
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto[] listEvents(@RequestBody LunchSearchDTO search){
        List<LunchDto> list = new ArrayList<LunchDto>();

        LunchDto lunch = new LunchDto();

        lunch.setId(3423);
        lunch.setName("sdfsdf");
        list.add(lunch);

        LunchDto lunch1 = new LunchDto();
        lunch1.setId(34231);
        lunch1.setName("xxx");
        lunch1.setLocation("sdfsdf");
        list.add(lunch1);


        LunchDto[] result = new LunchDto[list.size()];

        for (int i = 0; i < list.size(); i++){
            result[i] = list.get(i);
        }

        return result;
    }

    @ResponseBody
    @RequestMapping(value="/{lunchId}/contacts/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public ContactDto getLunchContact(@PathVariable String lunchId, @PathVariable String id){
        return null;
    }

    @ResponseBody
    @RequestMapping(value="/{lunchId}/contacts", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public ContactDto[] getLunchContacts(@PathVariable String lunchId, @PathVariable String id){
        return null;
    }
}
