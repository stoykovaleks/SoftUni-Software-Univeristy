using System;

namespace _06_Oscar_
{
    class Program
    {
        static void Main(string[] args)
        {
            string actorName = Console.ReadLine();
            double pointsFromAcademy = double.Parse(Console.ReadLine());
            int countTechs = int.Parse(Console.ReadLine());

            for (int i = 0; i < countTechs; i++)
            {
                string techName = Console.ReadLine();
                double techPoints = double.Parse(Console.ReadLine());
                double newPoints = techName.Length * techPoints / 2;

                pointsFromAcademy += newPoints;
                if (pointsFromAcademy > 1250.5)
                {
                    break;
                }
            }
            if (pointsFromAcademy > 1250.5)
            {
                Console.WriteLine($"Congratulations, {actorName} got a nominee for leading role with {pointsFromAcademy:f1}!");
            }
            else
            {
                Console.WriteLine($"Sorry, {actorName} you need {1250.5 - pointsFromAcademy:f1} more!");
            }
        }
    }
}