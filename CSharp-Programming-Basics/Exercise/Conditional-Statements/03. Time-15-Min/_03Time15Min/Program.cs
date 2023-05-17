using System;

namespace _03Min15
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int hours = int.Parse(Console.ReadLine());
            int minute = int.Parse(Console.ReadLine());

            int addMinutes = minute + 15;
            int addHours = 0;

            if ( addMinutes >= 60)
            {
                addHours = hours + 1;
                addMinutes = addMinutes % 60;
            }
            else
            {
                addHours = hours;
            }

            if (addHours >= 24)
            {
                addHours = addHours % 24;

            }


            if (addMinutes < 10)
            {
                Console.WriteLine($"{addHours}:0{addMinutes}");
            }
            else
            {
                Console.WriteLine($"{addHours}:{addMinutes}");
            }
        }

    }
}