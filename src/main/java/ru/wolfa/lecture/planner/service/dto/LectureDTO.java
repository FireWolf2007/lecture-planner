package ru.wolfa.lecture.planner.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Lecture entity.
 */
public class LectureDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(max = 1000)
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        LectureDTO lectureDTO = (LectureDTO) o;
        if (lectureDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), lectureDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "LectureDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
