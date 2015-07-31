package net.jammidi.service;

import net.jammidi.dto.MidiEvent;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class MidiService {

    @Resource
    private MongoOperations mongoTemplate;

    public List<MidiEvent> getAll() {
        List<MidiEvent> events = mongoTemplate.findAll(MidiEvent.class);
        return events;
    }
}
