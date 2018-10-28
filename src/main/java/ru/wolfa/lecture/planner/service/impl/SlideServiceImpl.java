package ru.wolfa.lecture.planner.service.impl;

import ru.wolfa.lecture.planner.service.SlideService;
import ru.wolfa.lecture.planner.domain.Slide;
import ru.wolfa.lecture.planner.repository.SlideRepository;
import ru.wolfa.lecture.planner.service.dto.SlideDTO;
import ru.wolfa.lecture.planner.service.mapper.SlideMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing Slide.
 */
@Service
@Transactional
public class SlideServiceImpl implements SlideService {

    private final Logger log = LoggerFactory.getLogger(SlideServiceImpl.class);

    private final SlideRepository slideRepository;

    private final SlideMapper slideMapper;

    public SlideServiceImpl(SlideRepository slideRepository, SlideMapper slideMapper) {
        this.slideRepository = slideRepository;
        this.slideMapper = slideMapper;
    }

    /**
     * Save a slide.
     *
     * @param slideDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public SlideDTO save(SlideDTO slideDTO) {
        log.debug("Request to save Slide : {}", slideDTO);

        Slide slide = slideMapper.toEntity(slideDTO);
        slide = slideRepository.save(slide);
        return slideMapper.toDto(slide);
    }

    /**
     * Get all the slides.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<SlideDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Slides");
        return slideRepository.findAll(pageable)
            .map(slideMapper::toDto);
    }


    /**
     * Get one slide by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<SlideDTO> findOne(Long id) {
        log.debug("Request to get Slide : {}", id);
        return slideRepository.findById(id)
            .map(slideMapper::toDto);
    }

    /**
     * Delete the slide by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Slide : {}", id);
        slideRepository.deleteById(id);
    }
}
