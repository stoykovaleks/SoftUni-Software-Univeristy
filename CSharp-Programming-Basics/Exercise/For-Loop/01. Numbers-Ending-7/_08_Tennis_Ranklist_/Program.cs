using System;

namespace _08_Tennis_Ranklist_
{
    class Program
    {
        static void Main(string[] args)
        {
            double countTurnirs = int.Parse(Console.ReadLine());
            int startingPoints = int.Parse(Console.ReadLine());
            int Wpoints = 2000;
            int Fpoints = 1200;
            int SFpoints = 720;
            double totalpoints = 0;
            double averagePoints = 0;
            double wins = 0;
            double finalPoints = 0;

            for (int index = 0; index < countTurnirs; index++)
            {
        
                string position = Console.ReadLine();

                if (position == "W")
                {
                    totalpoints += Wpoints;
                    wins++;
                }
                else if (position == "F")
                {
                    totalpoints += Fpoints;
                }
                else if (position == "SF")
                {
                    totalpoints += SFpoints;
                }
            }
            averagePoints = totalpoints / countTurnirs;
            finalPoints = totalpoints + startingPoints;


            Console.WriteLine($"Final points: {finalPoints}");
            Console.WriteLine($"Average points: {Math.Floor(averagePoints)}");
            Console.WriteLine($"{(wins/countTurnirs) * 100:f2}%");
        }
    }
}