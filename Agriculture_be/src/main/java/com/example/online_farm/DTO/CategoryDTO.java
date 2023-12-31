package com.example.online_farm.DTO;

import jakarta.validation.constraints.NotEmpty;


public class CategoryDTO {
    private String _id;
    @NotEmpty(message = "Tên không được để trống")
    private String name;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
