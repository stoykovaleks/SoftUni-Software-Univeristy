using System;

namespace _07_Min_Number_
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            double minNum = double.MaxValue;

            while (input != "Stop")
            {
                double inputAsNum = double.Parse(input);

                if (inputAsNum < minNum)
                {
                    minNum = inputAsNum;
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(minNum);
        }
    }
}