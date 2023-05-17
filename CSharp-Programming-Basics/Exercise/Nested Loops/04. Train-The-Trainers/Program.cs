using System;

namespace _04_TrainTheTrainers
{
    class Program
    {
        static void Main(string[] args)
        {
            int judgesCount = int.Parse(Console.ReadLine());
            double presentationsAvaraggeGradeSum = 0;
            int presentatiionsCount = 0;

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "Finish")
                {
                    break;
                }

                presentatiionsCount++;
                double gradeSum = 0;
                for (int i = 0; i < judgesCount; i++)
                {
                    gradeSum += double.Parse(Console.ReadLine());
                }
                presentationsAvaraggeGradeSum += gradeSum / judgesCount;
                Console.WriteLine($"{command} - {gradeSum / judgesCount:f2}.");
            }
            Console.WriteLine($"Student's final assessment is {presentationsAvaraggeGradeSum /presentatiionsCount:f2}.");
        }
    }
}