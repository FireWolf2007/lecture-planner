package ru.wolfa.lecture.planner.service.mapper;

import ru.wolfa.lecture.planner.domain.*;
import ru.wolfa.lecture.planner.service.dto.LectureDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Lecture and its DTO LectureDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface LectureMapper extends EntityMapper<LectureDTO, Lecture> {


    @Mapping(target = "slides", ignore = true)
    Lecture toEntity(LectureDTO lectureDTO);

    default Lecture fromId(Long id) {
        if (id == null) {
            return null;
        }
        Lecture lecture = new Lecture();
        lecture.setId(id);
        return lecture;
    }
}
