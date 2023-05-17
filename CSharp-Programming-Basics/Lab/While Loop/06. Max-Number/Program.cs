using System;

namespace _06_Max_Number_
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            double maxNum = double.MinValue;
      
            while (input != "Stop")
            {
                double intputAsNum = double.Parse(input);

                if (intputAsNum > maxNum)
                {
                    maxNum = intputAsNum;
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(maxNum);
        }
    }
}