using System;

namespace _08_Number_sequence_
{
    class Program
    {
        static void Main(string[] args)
        {
            int numCount = int.Parse(Console.ReadLine());

            int maxNum = int.MinValue;
            int minNum = int.MaxValue;

            for (int i = 1; i <= numCount; i++)
            {
                int currentNum = int.Parse(Console.ReadLine());

                if (currentNum >= maxNum)
                {
                    maxNum = currentNum;
                }
                if (currentNum <= minNum)
                {
                    minNum = currentNum;
                }
            }
            Console.WriteLine($"Max number: {maxNum}");
            Console.WriteLine($"Min number: {minNum}");
        }
    }
}