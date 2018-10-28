package ru.wolfa.lecture.planner.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * Лекция
 */
@ApiModel(description = "Лекция")
@Entity
@Table(name = "lecture")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Lecture implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    /**
     * Название лекции
     */
    @NotNull
    @Size(max = 1000)
    @ApiModelProperty(value = "Название лекции", required = true)
    @Column(name = "name", length = 1000, nullable = false)
    private String name;

    @OneToMany(mappedBy = "lecture")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Slide> slides = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Lecture name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Slide> getSlides() {
        return slides;
    }

    public Lecture slides(Set<Slide> slides) {
        this.slides = slides;
        return this;
    }

    public Lecture addSlides(Slide slide) {
        this.slides.add(slide);
        slide.setLecture(this);
        return this;
    }

    public Lecture removeSlides(Slide slide) {
        this.slides.remove(slide);
        slide.setLecture(null);
        return this;
    }

    public void setSlides(Set<Slide> slides) {
        this.slides = slides;
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
        Lecture lecture = (Lecture) o;
        if (lecture.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), lecture.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Lecture{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
