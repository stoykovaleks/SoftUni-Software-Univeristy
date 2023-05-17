using System;

namespace _08_Tennis_Ranklist_
{
    class Program
    {
        static void Main(string[] args)
        {
            int turnirsCount = int.Parse(Console.ReadLine());
            int startingPoints = int.Parse(Console.ReadLine());

            double totalPoints = 0;
            double avaregePoints = 0;
            double finalPoints = 0;
            double winsCount = 0;

            for (int i = 0; i < turnirsCount; i++)
            {
                string position = Console.ReadLine();
                
                switch (position)
                {
                    case "W": winsCount++; totalPoints += 2000; break;
                    case "F": totalPoints += 1200; break;
                    case "SF": totalPoints += 720; break;
                }
            }
            finalPoints = totalPoints + startingPoints;
            avaregePoints = totalPoints / turnirsCount;
            double winsPercentage = (winsCount/turnirsCount) * 100;
           
            Console.WriteLine($"Final points: {finalPoints}");
            Console.WriteLine($"Average points: {Math.Floor(avaregePoints)}");
            Console.WriteLine($"{winsPercentage:f2}%");
        }
    }
}