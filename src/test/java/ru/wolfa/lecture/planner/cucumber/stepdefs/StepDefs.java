package ru.wolfa.lecture.planner.cucumber.stepdefs;

import ru.wolfa.lecture.planner.LecturePlannerApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = LecturePlannerApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
