using System;

namespace USDToBGN
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double dollar = double.Parse(Console.ReadLine());
            double rate = 1.79549;
            double leva = dollar * rate;

            Console.WriteLine(leva);
        }
    }
}