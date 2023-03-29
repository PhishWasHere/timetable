// Aries
package com.tgsi.timetable.mapper;

import java.time.LocalDateTime;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.tgsi.timetable.entity.Events;

@Mapper
public interface EventMapper {
    @Select("SELECT * FROM events WHERE start = #{today}")
    List<Events> todayEvent(@Param("today") LocalDateTime today);

    @Select("SELECT * FROM events WHERE id = #{id}")
    Events getEventById(Long id);

    @Select("SELECT * FROM events")
    List<Events> getAllEvents();

    @Insert("INSERT INTO events (title, description, location, start, end) VALUES (#{title}, #{description}, #{location}, #{start}, #{end})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertEvent(Events events);

    @Update("UPDATE events SET title = #{title}, description = #{description}, location = #{location}, start = #{start}, end= #{end} WHERE id = #{id}")
    void updatedEvent(Events event);
    
    @Delete("DELETE FROM events WHERE id = #{id}")
    void deleteEventById(Long id);
}