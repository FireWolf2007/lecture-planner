package ru.wolfa.lecture.planner.service.impl;

import ru.wolfa.lecture.planner.service.LectureService;
import ru.wolfa.lecture.planner.domain.Lecture;
import ru.wolfa.lecture.planner.repository.LectureRepository;
import ru.wolfa.lecture.planner.service.dto.LectureDTO;
import ru.wolfa.lecture.planner.service.mapper.LectureMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing Lecture.
 */
@Service
@Transactional
public class LectureServiceImpl implements LectureService {

    private final Logger log = LoggerFactory.getLogger(LectureServiceImpl.class);

    private final LectureRepository lectureRepository;

    private final LectureMapper lectureMapper;

    public LectureServiceImpl(LectureRepository lectureRepository, LectureMapper lectureMapper) {
        this.lectureRepository = lectureRepository;
        this.lectureMapper = lectureMapper;
    }

    /**
     * Save a lecture.
     *
     * @param lectureDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public LectureDTO save(LectureDTO lectureDTO) {
        log.debug("Request to save Lecture : {}", lectureDTO);

        Lecture lecture = lectureMapper.toEntity(lectureDTO);
        lecture = lectureRepository.save(lecture);
        return lectureMapper.toDto(lecture);
    }

    /**
     * Get all the lectures.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<LectureDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Lectures");
        return lectureRepository.findAll(pageable)
            .map(lectureMapper::toDto);
    }


    /**
     * Get one lecture by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<LectureDTO> findOne(Long id) {
        log.debug("Request to get Lecture : {}", id);
        return lectureRepository.findById(id)
            .map(lectureMapper::toDto);
    }

    /**
     * Delete the lecture by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Lecture : {}", id);
        lectureRepository.deleteById(id);
    }
}
