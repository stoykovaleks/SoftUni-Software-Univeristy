using System;

namespace _09_Fish_Tank_
{
    class Program
    {
        static void Main(string[] args)
        {
            double lenght = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());
            double percentage = double.Parse(Console.ReadLine()) / 100;

            double areaTank = lenght * width * height;
            double capacityLiters = areaTank * 0.001;
            double neededliters = capacityLiters * (1 - percentage);

            Console.WriteLine(neededliters);
        }
    }
}