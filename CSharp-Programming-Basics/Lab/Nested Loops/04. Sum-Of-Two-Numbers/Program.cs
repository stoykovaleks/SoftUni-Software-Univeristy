using System;

namespace _04_Sum_Of_Two_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int startInterval = int.Parse(Console.ReadLine());
            int endInterval = int.Parse(Console.ReadLine());
            int magicNum = int.Parse(Console.ReadLine());
            int counter = 0;
            int valiidCombinations = 0;

            for (int leftNum = startInterval; leftNum <= endInterval; leftNum++)
            {
                for (int rightNum = startInterval; rightNum <= endInterval; rightNum++)
                {
                    counter++;
                    int sum = leftNum + rightNum;

                    if (sum == magicNum)
                    {
                        valiidCombinations++;
                        Console.WriteLine($"Combination N:{counter} ({leftNum} + {rightNum} = {sum})");
                        break;
                    }
                }
                if (valiidCombinations == 1)
                {
                    break;
                }
            }
            if (valiidCombinations != 1)
            {
                Console.WriteLine($"{counter} combinations - neither equals {magicNum}");
            }
        }
    }
}