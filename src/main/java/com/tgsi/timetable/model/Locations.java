package com.tgsi.timetable.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class Locations {
    
  private Long id;
  
    @NotBlank
    @Size(max = 100)
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
    
}
