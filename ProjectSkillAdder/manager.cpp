#include <iostream>
#include "display.hpp"

int main() {
    bool isRunning = true;

    while (isRunning)
    {
        displayHome();

        std::cout << "Select an option: ";
        int answer;
        std::cin >> answer;

        switch(answer) {
            case 1:
                // goToProjectsTab();
                break;
            case 2:
                break;
            case 3:
                isRunning = false;
                break;
            default:
                std::cout << "Invalid answer!" << std::endl;
        }
    }

    std::cout << "Bye :<" << std::endl;
}
