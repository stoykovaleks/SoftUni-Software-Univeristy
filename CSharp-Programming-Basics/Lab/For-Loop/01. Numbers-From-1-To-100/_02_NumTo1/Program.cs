using System;

namespace _02_Nums_To_1_
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = n ; i <= 1; i -= 3)
            {
                Console.WriteLine(i);
            }
        }
    }
}