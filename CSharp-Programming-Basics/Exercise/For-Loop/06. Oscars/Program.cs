using System;

namespace _06_Oscars_
{
    class Program
    {
        static void Main(string[] args)
        {
            string actorName = Console.ReadLine();
            double pointsFromAcademy = int.Parse(Console.ReadLine());
            int juryCount = int.Parse(Console.ReadLine());

            for (int index = 0; index < juryCount; index++)
            {
                string juryName = Console.ReadLine();
                double pointsFromJury = double.Parse(Console.ReadLine());

                double result = juryName.Length * pointsFromJury / 2;

                pointsFromAcademy += result;

                if (result > 1250.5)
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