using System;

namespace _07_Sum_Numbers_
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            double result = 0;

            for (int i = 1; i <= number; i++)
            {
                int currentNum = int.Parse(Console.ReadLine());

                result += currentNum;
            }
            Console.WriteLine(result);
        }
    }
}