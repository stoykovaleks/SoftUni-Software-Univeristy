using System;

namespace _10_OddOrEvenNum_
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int oddSum = 0;
            int evenSum = 0;

            for (int index = 0; index < n; index++)
            {
                int num = int.Parse(Console.ReadLine());

                if (index % 2 == 0)
                {
                    evenSum += num;
                }
                else
                {
                    oddSum += num;
                }
            }
            if (evenSum == oddSum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine("Sum = " + evenSum);
            }
            else
            {
                int diff = Math.Abs(evenSum - oddSum);

                Console.WriteLine("No");
                Console.WriteLine("Diff = " + diff);
            }
        }
    }
} 