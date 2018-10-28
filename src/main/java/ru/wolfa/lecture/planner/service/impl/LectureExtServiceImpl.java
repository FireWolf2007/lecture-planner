package ru.wolfa.lecture.planner.service.impl;

import ru.wolfa.lecture.planner.service.LectureServiceExt;
import ru.wolfa.lecture.planner.repository.LectureRepository;
import ru.wolfa.lecture.planner.service.dto.LectureDTO;
import ru.wolfa.lecture.planner.service.dto.SlideDTO;
import ru.wolfa.lecture.planner.service.mapper.LectureMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Lecture.
 */
@Service
@Primary
@Transactional
public class LectureExtServiceImpl extends LectureServiceImpl implements LectureServiceExt {

    private final Logger log = LoggerFactory.getLogger(LectureExtServiceImpl.class);

    private final LectureRepository lectureRepository;

    private final LectureMapper lectureMapper;

    public LectureExtServiceImpl(LectureRepository lectureRepository, LectureMapper lectureMapper) {
    	super(lectureRepository, lectureMapper);
        this.lectureRepository = lectureRepository;
        this.lectureMapper = lectureMapper;
    }

    /**
     * Get all the lectures.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<LectureDTO> findAll() {
        log.debug("Request to get all Lectures");
        return lectureMapper.toDto(lectureRepository.findAll());
    }

}
