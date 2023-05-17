using System;

namespace _02_Half_Sum_Element_
{
    class Program
    {
        static void Main(string[] args)
        {
            int numsCount = int.Parse(Console.ReadLine());

            int sum = 0;
            int maxNum = int.MinValue;

            for (int i = 0; i < numsCount; i++)
            {
                int currNum = int.Parse(Console.ReadLine());

                sum += currNum;

                if (currNum > maxNum)
                {
                    maxNum = currNum;
                }
            }
            int totalSum = sum - maxNum;

            if (totalSum == maxNum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {maxNum}");
            }
            else
            {
                int diff = Math.Abs(totalSum - maxNum);

                Console.WriteLine("No");
                Console.WriteLine($"Diff = {diff}");
            }
        }
    }
}