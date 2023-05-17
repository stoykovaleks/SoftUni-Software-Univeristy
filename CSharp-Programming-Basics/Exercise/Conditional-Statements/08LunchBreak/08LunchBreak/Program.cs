using System;

namespace _08_LunchBreak
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nameMovie = Console.ReadLine();
            int episodeDuration = int.Parse(Console.ReadLine());
            int breakDuration = int.Parse(Console.ReadLine());

            double lunchTime = (breakDuration * 1.0) / 8.0;
            double relaxTime = (breakDuration * 1.0) / 4.0;
            double leftTime = breakDuration - lunchTime - relaxTime;
            double difference = leftTime - episodeDuration;

            if (difference >= 0)
            {
                difference = Math.Ceiling(difference);
                Console.WriteLine($"You have enough time to watch {nameMovie} and left with {difference} minutes free time.");
            }
            else
            {
                difference = Math.Abs(difference);
                difference = Math.Ceiling(difference);
                Console.WriteLine($"You don't have enough time to watch {nameMovie}, you need {difference} more minutes.");
            }
        }
    }
}