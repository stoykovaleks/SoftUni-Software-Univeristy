using System;

namespace InchToCm
{
    class Program
    {
        public static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());

            double area = (double)(a * 2.54);

            Console.WriteLine(area);
        }
    }
}