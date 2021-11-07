package com.ser.soccer.tournament.schedular;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("scheduleService")
public class ScheduleService {

    @Autowired
    ScheduleRepo schRepo;

    public Schedule save(Schedule sch) {
        return schRepo.save(sch);
    }

    public void delete(String category) {
        schRepo.delete(category);
    }
}
