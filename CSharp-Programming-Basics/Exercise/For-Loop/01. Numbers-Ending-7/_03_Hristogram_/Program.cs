using System;

namespace _03_Histogram_
{
    class Program
    {
        static void Main(string[] args)
        {
            int numsCount = int.Parse(Console.ReadLine());
            int p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

            for (int i = 0; i < numsCount; i++)
            {
                int num = int.Parse(Console.ReadLine());

                if (num < 200)
                {
                    p1++;
                }
                else if (num < 400)
                {
                    p2++;
                }
                else if (num < 600)
                {
                    p3++;
                }
                else if (num < 800)
                {
                    p4++;
                }
                else if (num >= 800)
                {
                    p5++;
                }
            }
            Console.WriteLine($"{p1 * 1.0/ numsCount * 100:f2}%");
            Console.WriteLine($"{p2 * 1.0/ numsCount * 100:f2}%");
            Console.WriteLine($"{p3 * 1.0/ numsCount * 100:f2}%");
            Console.WriteLine($"{p4 * 1.0/ numsCount * 100:f2}%");
            Console.WriteLine($"{p5 * 1.0/ numsCount * 100:f2}%");
        }
    }
}