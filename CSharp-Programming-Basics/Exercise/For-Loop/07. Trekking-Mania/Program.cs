using System;

namespace _07_Trekking_Mania_
{
    class Program
    {
        static void Main(string[] args)
        {
            int groupsCount = int.Parse(Console.ReadLine());

            int musala = 0;
            int monblan = 0;
            int kilimanjaro = 0;
            int k2 = 0;
            int everest = 0;
            double totalPeoples = 0;

            for (int i = 1; i <= groupsCount; i++)
            {
                int peopleCount = int.Parse(Console.ReadLine());

                if (peopleCount <= 5)
                {
                    musala += peopleCount;
                }
                else if (peopleCount >=6 && peopleCount <= 12)
                {
                    monblan += peopleCount;
                }
                else if (peopleCount >= 13 && peopleCount <= 25)
                {
                    kilimanjaro += peopleCount;
                }
                else if (peopleCount>=26 && peopleCount <= 40)
                {
                    k2 += peopleCount;
                }
                else if (peopleCount >= 41)
                {
                    everest += peopleCount;
                }
            }
             totalPeoples = musala + monblan + kilimanjaro + k2 + everest;

            double peoplesMusala = (musala / totalPeoples) * 100;
            double peoplesMonblan = (monblan / totalPeoples) * 100;
            double peoplesKilimanjaro = (kilimanjaro / totalPeoples) * 100;
            double peoplesK2 = (k2 / totalPeoples) * 100;
            double peopleEverest = (everest / totalPeoples) * 100;

            Console.WriteLine($"{peoplesMusala:f2}%");
            Console.WriteLine($"{peoplesMonblan:f2}%");
            Console.WriteLine($"{peoplesKilimanjaro:f2}%");
            Console.WriteLine($"{peoplesK2:f2}%");
            Console.WriteLine($"{peopleEverest:f2}%");
        }
    }
}