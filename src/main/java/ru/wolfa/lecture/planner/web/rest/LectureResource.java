package ru.wolfa.lecture.planner.web.rest;

import com.codahale.metrics.annotation.Timed;
import ru.wolfa.lecture.planner.service.LectureService;
import ru.wolfa.lecture.planner.web.rest.errors.BadRequestAlertException;
import ru.wolfa.lecture.planner.web.rest.util.HeaderUtil;
import ru.wolfa.lecture.planner.web.rest.util.PaginationUtil;
import ru.wolfa.lecture.planner.service.dto.LectureDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Lecture.
 */
/* MOVED TO LectureResourceExt
@RestController
*/
@RequestMapping("/api")
public class LectureResource {

    private final Logger log = LoggerFactory.getLogger(LectureResource.class);

    private static final String ENTITY_NAME = "lecture";

    private final LectureService lectureService;

    public LectureResource(LectureService lectureService) {
        this.lectureService = lectureService;
    }

    /**
     * POST  /lectures : Create a new lecture.
     *
     * @param lectureDTO the lectureDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new lectureDTO, or with status 400 (Bad Request) if the lecture has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/lectures")
    @Timed
    public ResponseEntity<LectureDTO> createLecture(@Valid @RequestBody LectureDTO lectureDTO) throws URISyntaxException {
        log.debug("REST request to save Lecture : {}", lectureDTO);
        if (lectureDTO.getId() != null) {
            throw new BadRequestAlertException("A new lecture cannot already have an ID", ENTITY_NAME, "idexists");
        }
        LectureDTO result = lectureService.save(lectureDTO);
        return ResponseEntity.created(new URI("/api/lectures/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /lectures : Updates an existing lecture.
     *
     * @param lectureDTO the lectureDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated lectureDTO,
     * or with status 400 (Bad Request) if the lectureDTO is not valid,
     * or with status 500 (Internal Server Error) if the lectureDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/lectures")
    @Timed
    public ResponseEntity<LectureDTO> updateLecture(@Valid @RequestBody LectureDTO lectureDTO) throws URISyntaxException {
        log.debug("REST request to update Lecture : {}", lectureDTO);
        if (lectureDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        LectureDTO result = lectureService.save(lectureDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, lectureDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /lectures : get all the lectures.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of lectures in body
     */
    @GetMapping("/lectures")
    @Timed
    public ResponseEntity<List<LectureDTO>> getAllLectures(Pageable pageable) {
        log.debug("REST request to get a page of Lectures");
        Page<LectureDTO> page = lectureService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/lectures");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /lectures/:id : get the "id" lecture.
     *
     * @param id the id of the lectureDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the lectureDTO, or with status 404 (Not Found)
     */
    @GetMapping("/lectures/{id}")
    @Timed
    public ResponseEntity<LectureDTO> getLecture(@PathVariable Long id) {
        log.debug("REST request to get Lecture : {}", id);
        Optional<LectureDTO> lectureDTO = lectureService.findOne(id);
        return ResponseUtil.wrapOrNotFound(lectureDTO);
    }

    /**
     * DELETE  /lectures/:id : delete the "id" lecture.
     *
     * @param id the id of the lectureDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/lectures/{id}")
    @Timed
    public ResponseEntity<Void> deleteLecture(@PathVariable Long id) {
        log.debug("REST request to delete Lecture : {}", id);
        lectureService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
