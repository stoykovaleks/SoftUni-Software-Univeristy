using System;

namespace _08_Num_Sequence_
{
    class Program
    {
        static void Main(string[] args)
        {
            int countNumbers = int.Parse(Console.ReadLine());
            int maxNumber = int.MinValue;
            int minNumber = int.MaxValue;

            for (int i = 1; i <= countNumbers; i++)
            {
                int currentNum = int.Parse(Console.ReadLine());

                if (currentNum < minNumber)
                {
                    minNumber = currentNum;
                }
                if (currentNum > maxNumber)
                {
                    maxNumber = currentNum;
                }
            }
            Console.WriteLine($"Max number: {maxNumber}");
            Console.WriteLine($"Min number: {minNumber}");
        }
    }
}