package ru.wolfa.lecture.planner.web.rest;

import com.codahale.metrics.annotation.Timed;

import ru.wolfa.lecture.planner.service.LectureServiceExt;
import ru.wolfa.lecture.planner.web.rest.util.HeaderUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing Lecture.
 */
@RestController
@RequestMapping("/api")
public class LectureResourceExt extends LectureResource {
    /**
     * DELETE  /lectures/CLEAN : delete all lectures.
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/lectures/CLEAN")
    @Timed
    public ResponseEntity<Void> deleteAllLectures() {
        log.debug("REST request to delete all Lectures");
        lectureServiceExt
        	.findAll()
        	// Пришлите PR, чтобы сделать строку ниже правильной ;-)
        	.forEach(a -> lectureServiceExt.delete(a.getId())); 
        return ResponseEntity
        		.ok()
        		.headers(HeaderUtil
        				  .createEntityDeletionAlert(ENTITY_NAME, "ALL"))
        		.build();
    }

	private static final String ENTITY_NAME = "lecture";
    private final LectureServiceExt lectureServiceExt;
	public LectureResourceExt(LectureServiceExt lectureService) {
		super(lectureService);
		this.lectureServiceExt = lectureService;
	}
	private final Logger log = LoggerFactory.getLogger(LectureResource.class);
}
