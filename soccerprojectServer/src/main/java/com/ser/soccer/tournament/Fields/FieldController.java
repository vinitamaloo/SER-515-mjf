package com.ser.soccer.tournament.Fields;

import com.ser.soccer.tournament.referee.RefereeUsecase;
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
    private RefereeUsecase refereeUsecase = new RefereeUsecase();
    @PostMapping("/add_field")
    public Fields addField(@RequestBody Fields field) {
        return fieldUsecase.addField(field);
    }

    @GetMapping("/get_unassigned_field")
    public List<Fields> getUnassignedFields() {
        return fieldUsecase.getUnassignedFields();
    }

    @PostMapping("/update_refname")
    public void UpdateRefereeNameandEmail(@RequestBody UpdateReferee updateReferee) {
//        System.out.println(updateReferee.getRefereeName()+" "+updateReferee.getField());
        fieldUsecase.updateRefereeNameandEmail(updateReferee);
//        refereeUsecase.UpdateStatusByEmail(updateReferee.refereeEmail);
    }
}
