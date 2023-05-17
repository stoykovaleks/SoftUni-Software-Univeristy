using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double angleInRadians = double.Parse(Console.ReadLine());

            double angleInDegrees = angleInRadians * 180 / Math.PI;

            Console.WriteLine(angleInDegrees);
        }

            
    }
}