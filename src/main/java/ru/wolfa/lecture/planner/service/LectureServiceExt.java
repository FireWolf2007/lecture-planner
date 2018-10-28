package ru.wolfa.lecture.planner.service;

import ru.wolfa.lecture.planner.service.dto.LectureDTO;

import java.util.List;

/**
 * Service Interface for managing Lecture.
 */
public interface LectureServiceExt extends LectureService {

    /**
     * Get all the lectures.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    List<LectureDTO> findAll();

}
