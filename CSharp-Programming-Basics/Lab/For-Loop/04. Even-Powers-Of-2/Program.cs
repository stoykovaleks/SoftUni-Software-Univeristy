using System;

namespace _04_Even_Powers_of_2_
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            for (int p = 0; p <= num; p++)
            {
                if (p % 2 == 0)
                {
                    Console.WriteLine(Math.Pow(2, p));
                }
                
            }
        }
    }
}