package com.ser.soccer.tournament.schedular;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("venueService")
public class FieldService {

    @Autowired
    private FieldRepo venueRepo;

    public List<Field> getFields(String cat) {
        return venueRepo.getFields(cat);
    }

}
