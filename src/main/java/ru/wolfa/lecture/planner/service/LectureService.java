package ru.wolfa.lecture.planner.service;

import ru.wolfa.lecture.planner.service.dto.LectureDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Lecture.
 */
public interface LectureService {

    /**
     * Save a lecture.
     *
     * @param lectureDTO the entity to save
     * @return the persisted entity
     */
    LectureDTO save(LectureDTO lectureDTO);

    /**
     * Get all the lectures.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<LectureDTO> findAll(Pageable pageable);


    /**
     * Get the "id" lecture.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<LectureDTO> findOne(Long id);

    /**
     * Delete the "id" lecture.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
