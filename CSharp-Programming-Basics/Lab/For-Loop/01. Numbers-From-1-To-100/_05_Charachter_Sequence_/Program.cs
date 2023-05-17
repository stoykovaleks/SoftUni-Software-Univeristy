using System;

namespace _05_Charachter_Sequence_
{
    class Program
    {
        static void Main(string[] args)
        {
            string symbol = Console.ReadLine();

            for (int index = 0; index < symbol.Length; index++)
            {
                Console.WriteLine(symbol[index]);
            }
        }
    }
}