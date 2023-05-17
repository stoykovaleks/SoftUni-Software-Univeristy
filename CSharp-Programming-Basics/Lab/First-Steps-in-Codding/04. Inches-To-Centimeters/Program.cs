using System;

namespace _04_Iches_To_Centemeters_
{
    class Program
    {
        static void Main(string[] args)
        {
            double centimeters = double.Parse(Console.ReadLine());
            double inches = 2.54;
            double inchetoToCentimeters = centimeters * inches;

            Console.WriteLine(inchetoToCentimeters);
        }
    }
}