#pragma once
#include <iostream>
#include <stdlib.h>

void displayHome() {
    system("clear");
    std::cout << "You can change the layout of the projects and the skills.\nYou can also add new projects and skills.\n\n";
    std::cout << "\t1. Manage Projects\n";
    std::cout << "\t2. Manage Skills\n";
    std::cout << "\t3. Exit\n";
}

void displayProjectsTab() {
    system("clear");
    std::cout << "Project Management\n\n";
    std::cout << "\t1. Add a new Project\n";
    std::cout << "\t2. Edit an existing Project\n";
    std::cout << "\t3. Delete a Project\n";
    std::cout << "\t4. Back to Home\n";
}

void displaySkillsTab() {
    system("clear");
    std::cout << "Skill Management\n\n";
    std::cout << "\t1. Add a new Skill\n";
    std::cout << "\t2. Edit an existing Skill\n";
    std::cout << "\t3. Delete a Skill\n";
    std::cout << "\t4. Back to Home\n";
}