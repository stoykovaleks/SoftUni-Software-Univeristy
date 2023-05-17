using System;

namespace _07_Project_Creation_
{
    class Program
    {
        static void Main(string[] args)
        {
            string architectName = Console.ReadLine();
            int projectsCountNeeded = int.Parse(Console.ReadLine());
            int timePerOneProject = 3;
            int TotalTime = projectsCountNeeded * timePerOneProject;

            Console.WriteLine($"The architect {architectName} will need {TotalTime} hours to complete {projectsCountNeeded} project/s.");
        }
    }
}