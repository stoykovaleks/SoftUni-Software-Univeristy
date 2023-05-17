using System;

namespace _09_Left_RightSum_
{
    class Program
    {
        static void Main(string[] args)
        {
            int numbersCount = int.Parse(Console.ReadLine());
            int leftSum = 0;
            int rightSum = 0;

            for (int i = 1; i <= numbersCount; i++)
            {
                int firstN = int.Parse(Console.ReadLine());
                int secondN = int.Parse(Console.ReadLine());

                if (i % 2 == 0)
                {
                    leftSum = firstN + secondN;
                }
                else
                {
                    rightSum = firstN + secondN;
                }
            }
            if (leftSum == rightSum)
            {
                Console.WriteLine($"Yes, sum = {leftSum}");
            }
            else
            {
                Console.WriteLine($"No, diff = {Math.Abs(leftSum - rightSum)}");
            }
        }   
    }
}