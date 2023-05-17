using System;

namespace _01_Nums_End_In_7_
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 7; i <= 997; i++)
            {
                if (i % 10 == 7)
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}