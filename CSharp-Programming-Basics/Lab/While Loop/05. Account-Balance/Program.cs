using System;

namespace _05_Account_Balance_
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            double totalSum = 0;

            while (input != "NoMoreMoney")
            {
                double inputNum = double.Parse(input);
                if (inputNum <= 0)
                {
                    Console.WriteLine("Invalid operation!");
                    break;
                }
                Console.WriteLine($"Increase: {inputNum:f2}");

                totalSum += inputNum;

                input = Console.ReadLine();

            }
            Console.WriteLine($"Total: {totalSum:f2}");
        }
    }
}