"use client";
import {configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import toggleReducer from './features/toggle-slice';
import employeeReducer from './features/employee-slice';
import taskReducer from './features/tasks-slice';
import logger from 'redux-logger';
import error from "./middleware/error"
import api from './middleware/api';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSagas";

const sagaMidlleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{    
        authReducer,
        toggleReducer,
        employeeReducer,
        taskReducer,
    },
    middleware:  
        (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, error, api, sagaMidlleware),
});

sagaMidlleware.run(rootSaga);

export default store;