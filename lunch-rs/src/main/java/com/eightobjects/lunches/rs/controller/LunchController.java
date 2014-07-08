package com.eightobjects.lunches.rs.controller;

import com.eightobjects.lunches.rs.dto.LunchDto;
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
@RequestMapping("/lunches")
public class LunchController {

    @ResponseBody
    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto findLunch(@PathVariable Long id) {
        LunchDto lunch = new LunchDto();
        return lunch;
    }

    @ResponseBody
    @RequestMapping(value = "/listEvents/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public LunchDto[] listEvents(@PathVariable Long id){
        List<LunchDto> list = new ArrayList<LunchDto>();

        LunchDto lunch = new LunchDto();

        lunch.setId(3423);
        lunch.setName("sdfsdf");
        list.add(lunch);
        return (LunchDto[]) list.toArray();
    }
}
