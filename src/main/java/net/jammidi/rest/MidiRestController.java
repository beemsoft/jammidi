package net.jammidi.rest;

import net.jammidi.dto.MidiEvent;
import net.jammidi.service.MidiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MidiRestController {

    @Autowired
    private MidiService midiService;

    @RequestMapping("/api/events")
    public List<MidiEvent> getAll() {

        return midiService.getAll();
    }

}