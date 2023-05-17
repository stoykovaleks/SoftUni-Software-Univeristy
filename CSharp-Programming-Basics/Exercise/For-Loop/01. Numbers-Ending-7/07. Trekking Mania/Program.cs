using System;

namespace _07_Trekking_Mania_
{
    class Program
    {
        static void Main(string[] args)
        {
            int countGroups = int.Parse(Console.ReadLine());
            int musala = 0;
            int monblan = 0;
            int kilimanjaro = 0;
            int k2 = 0;
            int everest = 0;
            double people = 0.0;

            for (int i = 1; i <= countGroups; i++)
            {
                int peopleGroup = int.Parse(Console.ReadLine());

                if (peopleGroup <= 5)
                {
                    musala += peopleGroup;
                }
                else if (peopleGroup >= 6 && peopleGroup <= 12)
                {
                    monblan += peopleGroup;
                }
                else if (peopleGroup >= 13 && peopleGroup <= 25)
                {
                    kilimanjaro += peopleGroup;
                }
                else if (peopleGroup >= 26 && peopleGroup <= 40)
                {
                    k2 += peopleGroup;
                }
                else if (peopleGroup >= 41)
                {
                    everest += peopleGroup;
                }
            }

            people = musala + monblan + kilimanjaro + k2 + everest;

            double musalaPeople = (musala / people) * 100;
            double monblanPeople = (monblan / people) * 100;
            double kilimanjaroPeople = (kilimanjaro / people) * 100;
            double k2People = (k2 / people) * 100;
            double everestPeople = (everest / people) * 100;

            Console.WriteLine($"{musalaPeople:f2}%");
            Console.WriteLine($"{monblanPeople:f2}%");
            Console.WriteLine($"{kilimanjaroPeople:f2}%");
            Console.WriteLine($"{k2People:f2}%");
            Console.WriteLine($"{everestPeople:f2}%");
        }
    }
}