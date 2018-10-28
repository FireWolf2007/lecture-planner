package ru.wolfa.lecture.planner.service.mapper;

import ru.wolfa.lecture.planner.domain.*;
import ru.wolfa.lecture.planner.service.dto.SlideDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Slide and its DTO SlideDTO.
 */
@Mapper(componentModel = "spring", uses = {LectureMapper.class})
public interface SlideMapper extends EntityMapper<SlideDTO, Slide> {

    @Mapping(source = "lecture.id", target = "lectureId")
    SlideDTO toDto(Slide slide);

    @Mapping(source = "lectureId", target = "lecture")
    Slide toEntity(SlideDTO slideDTO);

    default Slide fromId(Long id) {
        if (id == null) {
            return null;
        }
        Slide slide = new Slide();
        slide.setId(id);
        return slide;
    }
}
