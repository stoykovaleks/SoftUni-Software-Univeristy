using System;

namespace _02_Exam_Prep_
{
    class Program
    {
        static void Main(string[] args)
        {
            int badGradesCount = int.Parse(Console.ReadLine());
            int currentBadGrades = 0;
            string lastCommand = "";
            int problemsSolved = 0;
            int countGrades = 0;

            while (true)
            {
                string command = Console.ReadLine();

                if (command == "Enough")
                {
                    break;
                }

                lastCommand = command;
                problemsSolved++;

                int grade = int.Parse(Console.ReadLine());
                countGrades += grade;

                if (grade <= 4)
                {
                    currentBadGrades++;
                }
              
                if (badGradesCount == currentBadGrades)
                {
                    break;
                }
            }
            if (currentBadGrades == badGradesCount)
            {
                Console.WriteLine($"You need a break, {currentBadGrades} poor grades.");
            }
            else
            {
                double avarageGrade = countGrades * 1.0 / problemsSolved;
                Console.WriteLine($"Average score: {avarageGrade:f2}");
                Console.WriteLine($"Number of problems: {problemsSolved}");
                Console.WriteLine($"Last problem: {lastCommand}");
            }

        }
    }
}