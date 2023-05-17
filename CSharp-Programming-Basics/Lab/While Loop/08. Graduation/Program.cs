using System;

namespace _08_Graduation_
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            double sumOfGrades = 0;
            int excludedCount = 0;
            int grade = 1;

            while (grade <= 12)
            {
                double currentGrade = double.Parse(Console.ReadLine());
                
                if (currentGrade < 4)
                {
                    excludedCount++;
                }
                if (excludedCount == 2)
                {
                    Console.WriteLine($"{name} has been excluded at {(grade - 1)} grade");break;
                }

                sumOfGrades += currentGrade;
                grade++;
            }

            double average = sumOfGrades / 12;

            if (excludedCount < 2)
            {
                Console.WriteLine($"{name} graduated. Average grade: {average:f2}");
            }
        }
    }
}