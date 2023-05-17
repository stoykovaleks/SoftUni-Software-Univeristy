using System;

namespace _04_Sequence_2k_1_
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int count = 1;

            while (count <= num)
            {
                Console.WriteLine(count);
                count = count * 2 + 1;
            }
        }
    }
}