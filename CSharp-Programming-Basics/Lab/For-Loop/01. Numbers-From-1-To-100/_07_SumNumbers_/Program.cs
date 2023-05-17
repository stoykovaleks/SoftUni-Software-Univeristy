using System;

namespace _07_Sum_Numbers_
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int sum = 0;

            for (int i = 1; i <= num; i++)
            {
                int numberCurrent = int.Parse(Console.ReadLine());

                sum += numberCurrent;
            }
            Console.WriteLine(sum);
        }
    }
}