package com.ser.soccer.tournament.Fields;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 * @author Jayasai Kalyan Reddy
 *
 */

@Service("fieldUsecase")
public class FieldUsecase {
    @Autowired
    private FieldRepository fieldRepo = new FieldRepository();
    public List<Fields> getUnassignedFields() {
        return fieldRepo.getUnassignedFields();
    }

    public Fields addField(Fields field) {
		return fieldRepo.add(field);
	}
    public void updateRefereeNameandEmail(UpdateReferee updateReferee) {
        fieldRepo.updateRefereeName(updateReferee);
        fieldRepo.updateRefereeEmail(updateReferee);
    }

}
