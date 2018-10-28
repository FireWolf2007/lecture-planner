package ru.wolfa.lecture.planner.service;

import ru.wolfa.lecture.planner.service.dto.SlideDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Slide.
 */
public interface SlideServiceExt extends SlideService {

	Optional<List<SlideDTO>> first5SD(Long id);
	Optional<List<SlideDTO>> first5SDQ(Long id);
	Optional<List<SlideDTO>> first5SDNQ(Long id);

}
