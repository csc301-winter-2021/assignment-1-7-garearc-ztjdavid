package com.csc301.chckout.chechoutAPI.DAO;

import java.util.List;

public interface IDAO<T> {
    List<T> get(String uuid);

    String add(T object);
}
