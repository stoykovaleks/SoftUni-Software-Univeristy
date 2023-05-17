using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //intput

            double angleInRadians = double.Parse(Console.ReadLine());

            //calculations

            double angleInDegrees = angleInRadians * 180 / Math.PI;

            //output

            Console.WriteLine(angleInDegrees);
        }

            
    }
}