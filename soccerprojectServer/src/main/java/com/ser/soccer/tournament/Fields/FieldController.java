package com.ser.soccer.tournament.Fields;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author Jayasai Kalyan Reddy
 *
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController("FieldController")
@RequestMapping("/field")
public class FieldController {
    public FieldRepository fieldRepo;
    @Autowired
    private FieldUsecase fieldUsecase = new FieldUsecase();

    @PostMapping("/add_field")
    public Fields addField(@RequestBody Fields field) {
        return fieldUsecase.addField(field);
    }

    @GetMapping("/get_unassigned_field")
    public List<Fields> getUnassignedFields( ) {
        return fieldUsecase.getUnassignedFields();
    }
}
