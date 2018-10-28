package ru.wolfa.lecture.planner.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * Слайд
 */
@ApiModel(description = "Слайд")
@Entity
@Table(name = "slide")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Slide implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    /**
     * Номер слайда
     */
    @NotNull
    @ApiModelProperty(value = "Номер слайда", required = true)
    @Column(name = "jhi_number", nullable = false)
    private Integer number;

    /**
     * Примерное время на текущий слайд
     */
    @NotNull
    @ApiModelProperty(value = "Примерное время на текущий слайд", required = true)
    @Column(name = "timing", nullable = false)
    private Integer timing;

    /**
     * Текст по слайду
     */
    @NotNull
    @Size(max = 10000)
    @ApiModelProperty(value = "Текст по слайду", required = true)
    @Column(name = "text", length = 10000, nullable = false)
    private String text;

    /**
     * Лекция
     */
    @ApiModelProperty(value = "Лекция")
    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("slides")
    private Lecture lecture;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public Slide number(Integer number) {
        this.number = number;
        return this;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getTiming() {
        return timing;
    }

    public Slide timing(Integer timing) {
        this.timing = timing;
        return this;
    }

    public void setTiming(Integer timing) {
        this.timing = timing;
    }

    public String getText() {
        return text;
    }

    public Slide text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Lecture getLecture() {
        return lecture;
    }

    public Slide lecture(Lecture lecture) {
        this.lecture = lecture;
        return this;
    }

    public void setLecture(Lecture lecture) {
        this.lecture = lecture;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Slide slide = (Slide) o;
        if (slide.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), slide.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Slide{" +
            "id=" + getId() +
            ", number=" + getNumber() +
            ", timing=" + getTiming() +
            ", text='" + getText() + "'" +
            "}";
    }
}
