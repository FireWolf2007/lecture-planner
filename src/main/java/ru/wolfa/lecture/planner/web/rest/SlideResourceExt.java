package ru.wolfa.lecture.planner.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

import io.github.jhipster.web.util.ResponseUtil;
import ru.wolfa.lecture.planner.service.SlideServiceExt;
import ru.wolfa.lecture.planner.service.dto.SlideDTO;

/**
 * REST controller for managing Slide.
 */
@RestController
@RequestMapping("/api")
public class SlideResourceExt extends SlideResource {

	private final SlideServiceExt slideServiceExt;

	public SlideResourceExt(SlideServiceExt slideService) {
		super(slideService);
		this.slideServiceExt = slideService;
	}

	/**
	 * GET /lectures/FIRST5-SD/:id : get the "id" lecture.
	 *
	 * @param id the id of lecture
	 * @return the ResponseEntity with status 200 (OK) and with body list slideDTO,
	 *         or with status 404 (Not Found)
	 */
	@GetMapping("/slides/FIRST5-SD/{id}")
	@Timed
	public ResponseEntity<List<SlideDTO>> getFirst5Sd(@PathVariable Long id) {
		log.debug("REST request to get first 5 slides Lecture (by Spring Data interface) : {}", id);
		Optional<List<SlideDTO>> slides = slideServiceExt.first5SD(id);
		return ResponseUtil.wrapOrNotFound(slides);
	}

	/**
	 * GET /lectures/FIRST5-SDQ/:id : get the "id" lecture.
	 *
	 * @param id the id of lecture
	 * @return the ResponseEntity with status 200 (OK) and with body list slideDTO,
	 *         or with status 404 (Not Found)
	 */
	@GetMapping("/slides/FIRST5-SDQ/{id}")
	@Timed
	public ResponseEntity<List<SlideDTO>> getFirst5SdQ(@PathVariable Long id) {
		log.debug("REST request to get first 5 slides Lecture (by Spring Data interface with @Query) : {}", id);
		Optional<List<SlideDTO>> slides = slideServiceExt.first5SDQ(id);
		return ResponseUtil.wrapOrNotFound(slides);
	}

	/**
	 * GET /lectures/FIRST5-SDNQ/:id : get the "id" lecture.
	 *
	 * @param id the id of lecture
	 * @return the ResponseEntity with status 200 (OK) and with body list slideDTO,
	 *         or with status 404 (Not Found)
	 */
	@GetMapping("/slides/FIRST5-SDNQ/{id}")
	@Timed
	public ResponseEntity<List<SlideDTO>> getFirst5SdNQ(@PathVariable Long id) {
		log.debug("REST request to get first 5 slides Lecture (by Spring Data interface with @Query and native request) : {}", id);
		Optional<List<SlideDTO>> slides = slideServiceExt.first5SDNQ(id);
		return ResponseUtil.wrapOrNotFound(slides);
	}
}
