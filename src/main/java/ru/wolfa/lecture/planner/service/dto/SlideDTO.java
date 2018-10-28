package ru.wolfa.lecture.planner.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Slide entity.
 */
public class SlideDTO implements Serializable {

	private Long id;

    @NotNull
    private Integer number;

    @NotNull
    private Integer timing;

    @NotNull
    @Size(max = 10000)
    private String text;

    private Long lectureId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getTiming() {
        return timing;
    }

    public void setTiming(Integer timing) {
        this.timing = timing;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getLectureId() {
        return lectureId;
    }

    public void setLectureId(Long lectureId) {
        this.lectureId = lectureId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SlideDTO slideDTO = (SlideDTO) o;
        if (slideDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), slideDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SlideDTO{" +
            "id=" + getId() +
            ", number=" + getNumber() +
            ", timing=" + getTiming() +
            ", text='" + getText() + "'" +
            ", lecture=" + getLectureId() +
            "}";
    }

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;


}
