using System;

namespace _03_Histogram_
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int p1 = 0;
            int p2 = 0;
            int p3 = 0;
            int p4 = 0;
            int p5 = 0;

            for (int i = 0; i < n; i++)
            {
                int numbers = int.Parse(Console.ReadLine());

                if (numbers < 200)
                {
                    p1++;
                }
                else if (numbers < 400)
                {
                    p2++;
                }
                else if (numbers < 600)
                {
                    p3++;
                }
                else if (numbers < 800)
                {
                    p4++;
                }
                else if (numbers >= 800)
                {
                    p5++;
                }
            }
            Console.WriteLine($"{(p1 * 1.0) / n * 100:f2}%");
            Console.WriteLine($"{(p2 * 1.0) / n * 100:f2}%");
            Console.WriteLine($"{(p3 * 1.0) / n * 100:f2}%");
            Console.WriteLine($"{(p4 * 1.0) / n * 100:f2}%");
            Console.WriteLine($"{(p5 * 1.0) / n * 100:f2}%");
        }
    }
}