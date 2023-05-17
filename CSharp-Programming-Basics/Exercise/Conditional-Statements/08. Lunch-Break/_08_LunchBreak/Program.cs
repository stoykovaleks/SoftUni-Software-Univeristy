using System;

namespace _08_Lunch_Break_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string movieName = Console.ReadLine();
            int movieTime = int.Parse(Console.ReadLine());
            double breakTime = int.Parse(Console.ReadLine());

            double lunchTime = breakTime / 8;
            double relaxTime = breakTime / 4;
            double totalTime = breakTime - lunchTime - relaxTime;
            
            if (totalTime >= movieTime)
            {

                Console.WriteLine($"You have enough time to watch {movieName} and left with {Math.Ceiling(totalTime-movieTime)} minutes free time.");
            }
            else
            {
                Console.WriteLine($"You don't have enough time to watch {movieName}, you need {Math.Ceiling(movieTime-totalTime)} more minutes.");

            }
        }
    }
}
