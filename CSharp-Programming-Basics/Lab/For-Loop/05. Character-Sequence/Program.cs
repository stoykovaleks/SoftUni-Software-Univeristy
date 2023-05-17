using System;

namespace _05_Character_Sequence_
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            for (int i = 0; i < input.Length; i++)
            {
                int inputLenght = input.Length;

                Console.WriteLine(input[i]);
            }
        }
    }
}