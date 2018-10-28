package ru.wolfa.lecture.planner.service.impl;

import ru.wolfa.lecture.planner.service.SlideServiceExt;
import ru.wolfa.lecture.planner.domain.Lecture;
import ru.wolfa.lecture.planner.domain.Slide;
import ru.wolfa.lecture.planner.repository.SlideRepositoryExt;
import ru.wolfa.lecture.planner.service.dto.SlideDTO;
import ru.wolfa.lecture.planner.service.mapper.SlideMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Slide.
 */
@Service
@Primary
@Transactional
public class SlideServiceExtImpl extends SlideServiceImpl implements SlideServiceExt {

	private final Logger log = LoggerFactory.getLogger(SlideServiceExtImpl.class);

	private final SlideRepositoryExt slideRepositoryExt;

	private final SlideMapper slideMapper;

	public SlideServiceExtImpl(SlideRepositoryExt slideRepository, SlideMapper slideMapper) {
		super(slideRepository, slideMapper);
		this.slideRepositoryExt = slideRepository;
		this.slideMapper = slideMapper;
	}

	@Override
	public Optional<List<SlideDTO>> first5SD(Long id) {
		log.debug("Request to get first 5 Slides by String Data interface: {}", id);
		Lecture lect = new Lecture();
		lect.setId(id);
		List<Slide> l = slideRepositoryExt.findTop5ByLectureOrderByNumberAsc(lect);
		if (l != null && !l.isEmpty()) {
			return Optional.of(slideMapper.toDto(l));
		}
		return Optional.empty();
	}

	@Override
	public Optional<List<SlideDTO>> first5SDQ(Long id) {
		log.debug("Request to get first 5 Slides by JPQL : {}", id);
		List<Slide> l = slideRepositoryExt.queryExample(id, PageRequest.of(0, 5, new Sort(Direction.ASC, "number")));
		if (l != null && !l.isEmpty()) {
			return Optional.of(slideMapper.toDto(l));
		}
		return Optional.empty();
	}

	@Override
	public Optional<List<SlideDTO>> first5SDNQ(Long id) {
		log.debug("Request to get first 5 Slides by native query : {}", id);
		List<Slide> l = slideRepositoryExt.nativeQueryExample(id);
		if (l != null && !l.isEmpty()) {
			return Optional.of(slideMapper.toDto(l));
		}
		return Optional.empty();
	}

}
