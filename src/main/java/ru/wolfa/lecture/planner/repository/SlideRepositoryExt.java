package ru.wolfa.lecture.planner.repository;

import ru.wolfa.lecture.planner.domain.Lecture;
import ru.wolfa.lecture.planner.domain.Slide;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data repository for the Slide entity.
 */
@Repository
@Primary
public interface SlideRepositoryExt extends SlideRepository {

	// Интерфейсный вариант
	List<Slide> findTop5ByLectureOrderByNumberAsc(Lecture lecture);

	// Вариант с JPQL.
	@Query("SELECT s FROM Slide s WHERE s.lecture.id = :lectureId ORDER BY s.number")
	List<Slide> queryExample(@Param("lectureId") Long lectureId, Pageable page);

	// Вариант с nativeQuery 
	@Query(nativeQuery = true,
		value = "SELECT * FROM slide s WHERE s.lecture_id = :lectureId ORDER BY s.jhi_number LIMIT 5")
	List<Slide> nativeQueryExample(@Param("lectureId") Long lectureId);

}



