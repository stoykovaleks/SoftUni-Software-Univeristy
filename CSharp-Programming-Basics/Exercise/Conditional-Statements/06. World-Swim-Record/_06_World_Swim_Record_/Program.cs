using System;

namespace _06_World_Swim_Record_
{

    class Program
    {
        static void Main(string[] args)
        {
            double record = double.Parse(Console.ReadLine());
            double distance = double.Parse(Console.ReadLine());
            double timePerMeter = double.Parse(Console.ReadLine());

            double needSeconds = distance * timePerMeter;
            double timePer15Meters = Math.Floor(distance / 15);
            double time15 = timePer15Meters * 12.5;
            double totalTime = needSeconds + time15;
            if (record <= totalTime) 
            {
                double timeNeeded = totalTime - record;
                Console.WriteLine($"No, he failed! He was {timeNeeded:f2} seconds slower.");
            }
            else
            {
                
                Console.WriteLine($" Yes, he succeeded! The new world record is {totalTime:f2} seconds.");
            }
            
        }
    }
}
